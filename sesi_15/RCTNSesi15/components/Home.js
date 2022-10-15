import * as React from 'react';
import {  View, Button, StyleSheet } from 'react-native';
import { Text } from '@rneui/themed';

function Home({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor : '#f56e07'}}>
        <Text>Hello, welcome to home screen</Text>
        <Button
        style={styles.button}
          title="Core Components"
          onPress={() => navigation.push('CoreComponents')}
        />
        <Button
            style={styles.button}
            title="Color Column"
            onPress={() => navigation.push('Column')}
        />
        <Button
            style={styles.button}
            title="Styling Basic"
            onPress={() => navigation.push('StylingBasic')}
        />
        <Button
        style={styles.button}
          title="Text Input Handling"
          onPress={() => navigation.push('TextInputHandling')}
        />
        <Button
            style={styles.button}
            title="Scroll View Image"
            onPress={() => navigation.push('ScrollingImg')}
        />
        <Button
        style={styles.button}
          title="Scroll View"
          onPress={() => navigation.push('Scrolling')}
        />
        <Button
        style={styles.button}
          title="Flat List"
          onPress={() => navigation.push('Flat')}
        />
        <Button
        style={styles.button}
          title="RandomUser API"
          onPress={() => navigation.push('RandomUser')}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    button: {
      padding:10, 
      paddingTop:10,
      margin:10, 
    }
  });

  export default Home;