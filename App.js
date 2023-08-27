import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const add = () => {
    const total = number1 + number2;
    setResult(total);
  }
  const minus = () => {
    const total = number1 - number2;
    setResult(total);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
          style={styles.input}
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
      <View style={styles.button}>
          <Button onPress={add} title=" + "></Button>
          <Button onPress={minus} title=" - "></Button>
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
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
