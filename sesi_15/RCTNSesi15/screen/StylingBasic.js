import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function StylingBasic() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      <StatusBar style = "auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : 'grey'
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#0c1112',
    borderRadius: 6,
    backgroundColor : '#42d1f5',
    color : '#0c1112',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
