import {View, Text} from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

function CartList({products}: {products: Product[]}) {
  console.log('CartList');

  return (
    <View>
      <Text>Product List</Text>
      {products?.map(product => (
        <View key={product?.id}>
          <Text>{product?.name}</Text>
          <Text>{product?.price}</Text>
          <Text>{product?.quantity}</Text>
        </View>
      ))}
    </View>
  );
}

export default CartList;
