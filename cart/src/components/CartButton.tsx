import {Alert, StyleSheet, Text, TouchableOpacity} from 'react-native';

function CartButton() {
  console.log('CartButton');

  const handlePress = () => {
    Alert.alert('CartButton pressed');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Show Alert</Text>
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
    minWidth: 120,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CartButton;
