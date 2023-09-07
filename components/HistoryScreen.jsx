import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// redirected from HomeScreen with calculations' history data 
export default function HistorysScreen({ route }) {
const { data } = route.params;

// showing history data using FlatList
return(
  <View style={styles.container}>
    <View>
        <Text style={styles.text}>History</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      
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
        marginTop: 10,
        marginBottom: 5,
      },
  });
  