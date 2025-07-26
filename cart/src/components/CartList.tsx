import {View, Text, StyleSheet} from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

function CartList({products}: {products: Product[]}) {
  return (
    <View style={styles.container}>
      <Text>Product List</Text>
      {products?.map(product => (
        <View key={product?.id} style={styles.itemContainer}>
          <Text>{product?.name}</Text>
          <Text>Price: {product?.price}</Text>
          <Text>Quantity: {product?.quantity}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
  },
  itemContainer: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default CartList;
