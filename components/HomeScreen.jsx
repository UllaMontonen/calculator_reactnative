import { StatusBar } from 'expo-status-bar';
import React, {useState, useRef} from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default function HomeScreen({ navigation }) {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const initialFocus = useRef(null);

  // calculating the function if pressed plus button
  const add = () => {
    const total = number1 + number2;
    setResult(total);
    setData([...data, {key: (number1 + ' + ' + number2 + ' = ' + total)}]);
    setNumber1('');
    setNumber2('');
    initialFocus.current.focus();
  }
  // calculating the function if pressed minus button
  const minus = () => {
    const total = number1 - number2;
    setResult(total);
    setData([...data, {key: (number1 + ' + ' + number2 + ' = ' + total)}]);
    setNumber1('');
    setNumber2('');
    initialFocus.current.focus();
    
  }
  // calculator created: shows result, 2 textinputs, + button, - button and History button, which redirect to HistoryScreen + passing data as a params
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {result}</Text>
      <TextInput
          style={styles.input}
          ref={initialFocus}
          onChangeText={text => setNumber1(Number.parseInt(text))}
          value={number1}
          keyboardType='numeric'
      />
      <TextInput
          style={styles.input}
          onChangeText={text => setNumber2(Number.parseInt(text))}
          value={number2}
          keyboardType='numeric'
      />
      <View style={styles.operators}>
        <View style={styles.button}>
          <Button onPress={add} title=" + "></Button>
        </View>
        <View style={styles.button}>
          <Button onPress={minus} title=" - "></Button>
        </View>
        <View style={styles.button}>
          <Button onPress={() => navigation.navigate('History', {data})} title="HISTORY"></Button>
        </View>
      </View>
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
    width: 150,
    borderColor: "grey",
    borderWidth: 1,
    marginTop: 5,
    padding: 4,
  },
  operators: {
    flexDirection: 'row',
    marginTop: 10,
    widtg: '50%',
    justifyContent: 'space-evenly',
  },
  button: {
    widht: '30%',
  },
  text: {
    fontSize: 16,
  },
});
