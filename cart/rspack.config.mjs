import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as Repack from '@callstack/repack';
import { withZephyr } from 'zephyr-repack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STANDALONE = Boolean(process.env.STANDALONE);


/**
 * Rspack configuration enhanced with Re.Pack defaults for React Native.
 *
 * Learn about Rspack configuration: https://rspack.dev/config/
 * Learn about Re.Pack configuration: https://re-pack.dev/docs/guides/configuration
 */

export default withZephyr()(env => {
  const { platform, mode } = env
  return {
  context: __dirname,
  entry: './index.js',
  resolve: {
    ...Repack.getResolveOptions(),
  },
  output: {
    uniqueName: 'Cart',
  },
  module: {
    rules: [
      ...Repack.getJsTransformRules(),
      ...Repack.getAssetTransformRules(),
    ],
  },
  plugins: [
    new Repack.RepackPlugin(),
    new Repack.plugins.ModuleFederationPluginV2({
      name: 'Cart',
      filename: 'Cart.container.js.bundle',
      dts: false,
      exposes: {
        './CartList': './src/components/CartList.tsx',
        './CartButton': './src/components/CartButton.tsx',
      },
      shared: {
        react: {
          singleton: true,
          version: '19.0.0',
          eager: STANDALONE,
        },
        'react-native': {
          singleton: true,
          version: '0.79.5',
          eager: STANDALONE,
        },
      },
    }),

    new Repack.plugins.HermesBytecodePlugin({
      enabled: mode === 'production',
      test: /\.(js)?bundle$/,
      exclude: /index.bundle$/,
    }),
  ],
};
});
