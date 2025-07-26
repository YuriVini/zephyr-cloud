import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
import { withZephyr } from 'zephyr-repack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

const config = env => {
  const { platform, mode } = env
  return {
  context: __dirname,
  entry: './index.js',
  resolve: {
    ...Repack.getResolveOptions(),
  },
  output: {
    uniqueName: 'Host',
  },
  module: {
    rules: [
      ...Repack.getJsTransformRules(),
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [
    new Repack.RepackPlugin({
      platform,
    }),

    new Repack.plugins.ModuleFederationPluginV2({
      name: 'Host',
      filename: 'Host.container.js.bundle',
      dts: false,
      remotes: {
        Cart: `Cart@http://localhost:8082/${platform}/Cart.container.js.bundle`,
        // Cart: 'https://yuri-ferreira-oliveira-149-cart-zephyr-cloud-yuri-d54abc17e-ze.zephyrcloud.app',
        //Cart: 'https://yuri-ferreira-oliveira-254-cart-zephyr-cloud-yuri-770a31aad-ze.zephyrcloud.app',
      },
      shared: {
        react: {
          singleton: true,
          version: '19.0.0',
          eager: true,
        },
        'react-native': {
          singleton: true,
          version: '0.79.5',
          eager: true,
        }
      },
    }),

    // Supports for new architecture - Hermes can also use JS, it's not a requirement, it will still work the same but it's for performance optimization
    new Repack.plugins.HermesBytecodePlugin({
      enabled: mode === 'production',
      test: /\.(js)?bundle$/,
      exclude: /index.bundle$/,
    }),
  ],
};
};

export default withZephyr()(config);
