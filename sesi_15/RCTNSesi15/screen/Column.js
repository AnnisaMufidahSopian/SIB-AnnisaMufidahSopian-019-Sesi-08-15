import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';


export default function Column() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box1: {
    flex: 1,
    backgroundColor : 'red'
  },
  box2: {
    flex: 1,
    backgroundColor : 'yellow'
  },
  box3: {
    flex: 1,
    backgroundColor : 'green'
  },
});
