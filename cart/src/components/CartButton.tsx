import {StyleSheet, Text, View} from 'react-native';

function CartButton() {
  console.log('CartButton');
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>Cart Button</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CartButton;
