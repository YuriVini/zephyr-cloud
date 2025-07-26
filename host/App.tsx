/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {lazy, Suspense} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

const products = [
  {id: '1', name: 'Product 1', price: 100, quantity: 1},
  {id: '2', name: 'Product 2', price: 200, quantity: 2},
  {id: '3', name: 'Product 3', price: 300, quantity: 3},
];

const CartButton = lazy(() =>
  // @ts-ignore federated dts not enabled yet
  import('Cart/CartButton').then(module => ({default: module.CartButton})),
);

const CartList = lazy(() =>
  // @ts-ignore federated dts not enabled yet
  import('Cart/CartList').then(module => ({default: module.CartList})),
);

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={styles.scrollView}>
        <CartButton />
        <CartList products={products} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '5%',
  },
  scrollView: {
    backgroundColor: 'white',
  },
});

export default App;
