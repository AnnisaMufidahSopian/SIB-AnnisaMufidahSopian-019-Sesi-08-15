import React, {useState} from 'react'
import { StyleSheet, StatusBar, TextInput, View, Text } from 'react-native'

export default function TextInputHandling(){
    const [input, setInput] = useState('')

    return(
        <View style={styles.container}>
            <TextInput 
                style = {styles.textInput}
                placeholder= 'input text here'
                onChangeText={text => setInput(text)}
                defaultValue={input}
            />
            <Text style={styles.textInput}>
                The text : {input}
            </Text>
            <StatusBar style = 'auto' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25
    },
  
    textInput: {
      height: 40,
    },
  });