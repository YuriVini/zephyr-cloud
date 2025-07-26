import {View, Text} from 'react-native';

export default function CartList({products}: {products: any[]}) {
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
