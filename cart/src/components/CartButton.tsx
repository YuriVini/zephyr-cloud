import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';

function CartButton() {
  const handlePress = () => {
    Alert.alert('Cart screen will be ready soon');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Cart</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%',
    marginTop: 16,
    alignSelf: 'flex-end',
    marginHorizontal: 16,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
});

export default CartButton;
