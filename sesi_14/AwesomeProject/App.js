import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Image, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
      style={styles.img}
      source = {{
        uri : 'https://source.unsplash.com/random?sig='
      }}
      />
      <Text>First React Native App</Text>
      <Text>RCTN-KS05-019 Annisa Mufidah Sopian</Text>
      <Button title="First Button" color="blue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb6b34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height : 100,
    width : 100
  }
});
