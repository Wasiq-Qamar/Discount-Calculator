import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
import { Icon } from 'react-native-elements'


export default function App() {
  const [price, onChangePrice] = useState("");
  const [discount, onChangeDiscount] = useState("");
  const [memory, setMemory] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  let savedMoney ;
  let finalPrice ;
  let error = "" ;

  const calcDiscount = () => {
    const localPrice = eval(price);
    const localDiscount = eval(discount);
    if (price!=="" && discount!=="" && localDiscount<100){
      savedMoney = (localPrice/100 * localDiscount).toFixed(2);
      finalPrice = (localPrice - savedMoney).toFixed(2);
      savedMoney = "Money Saved:   Rs. "+savedMoney;
      finalPrice = "Final Price:        Rs. "+finalPrice;
    }
    else if (price!=="" && discount!==""){
      error = "Discount cannot be greater than 100%";
    }
    else{}
  }

  let meme = "987654321";
  const clearAndSave = () => {
    setMemory([...memory, finalPrice]);
    savedMoney=finalPrice=error="";
    onChangeDiscount("");
    onChangePrice("");
    meme = memory.map(i => i)
  }

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen}>
        <View style={styles.modal}>
          <View style={styles.mheader}>
            <Text style={styles.headerText}>Memory</Text>
            <Text style={styles.headerText}>
              <Icon
                raised
                name='close'
                type='font-awesome'
                color='#000'
                onPress={() => setModalOpen(false)}
              />
            </Text>
        </View>
            <Text>{meme}</Text>
        </View>
      </Modal>
      <View style={styles.header}>
        <Text style={styles.headerText}>Discount Calculator</Text>
        <Text style={styles.headerText}>
        <Icon
          raised
          name='database'
          type='font-awesome'
          color='#f50'
          onPress={() => setModalOpen(true)}
         />
        </Text>
      </View>
      <View style={styles.display}>
        <TextInput 
        style={styles.input} 
        value={price}
        placeholder="Original Price"
        keyboardType='numeric'
        onChangeText={text => onChangePrice(text)} />
        <TextInput 
        style={styles.input} 
        value={discount}
        placeholder="Discount Rate"
        keyboardType='numeric'
        onChangeText={text => onChangeDiscount(text)} />
        <StatusBar style="auto" />
        {calcDiscount()}
        <View style={styles.results}>
          <Text style={styles.text}>{error}</Text>
          <Text style={styles.text}>{savedMoney}</Text>
          <Text style={styles.text}>{finalPrice}</Text>
        </View>
        <View style={styles.reset}>
          <Button title="Save" onPress={clearAndSave} color='#001510' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#f46b45'
  },
  modal: {
  },
  display: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    height: 60,
    padding: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
    width: 350,
    fontSize: 18,
    color: '#fff'
  }, 
  header: {
    width: '80%',
    height: 150,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  mheader: {
    width: '67%',
    height: 150,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#001510',
    fontSize: 30,
    marginTop: 70,
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    color: 'aliceblue',
    textAlign: "center",
    marginTop: 10
  },
  results: {
    marginTop: 30
  },
  reset: {
    width: 150,
    marginLeft: 100,
  }
});
