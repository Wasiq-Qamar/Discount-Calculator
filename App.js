import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [price, onChangePrice] = useState("");
  const [discount, onChangeDiscount] = useState("");
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input} 
      value={price}
      placeholder="Original Price"
      onChangeText={text => onChangePrice('Rs.' + text)} />
      <TextInput 
      style={styles.input} 
      value={discount}
      placeholder="Discount Rate"
      onChangeText={text => onChangeDiscount(text + '%')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    width: 300
  }
});
