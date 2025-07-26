import React, {lazy, Suspense} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

const products = [
  {id: '1', name: 'Product 1', price: 100, quantity: 1},
  {id: '2', name: 'Product 2', price: 200, quantity: 2},
  {id: '3', name: 'Product 3', price: 300, quantity: 3},
];

const CartButton = lazy(() =>
  // @ts-ignore federated dts not enabled yet
  import('Cart/CartButton').then(module => ({default: module.CartButton})),
);

// const CartList = lazy(
//   () =>
//     // @ts-ignore federated dts not enabled yet
//     import('Cart/CartList'),
// );

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView style={styles.scrollView}>
        <Suspense fallback={<Text>Loading ... CartButton</Text>}>
          <CartButton />
        </Suspense>
        {/* <Suspense fallback={<Text>Loading... CartList</Text>}>
          <CartList products={products} />
        </Suspense> */}
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
