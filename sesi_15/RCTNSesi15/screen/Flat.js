import React from "react";
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  FlatList,
  StyleSheet
} from "react-native";

let posts = []

for (let i = 1; i <= 20; i++){
    posts.push({
        title : `Title ${i}`,
    })
}

const Flat = () => {
  return (
    <View style={styles.container}>
      <FlatList data={posts}
      renderItem= {({item}) => <Text style={styles.item}>{item.title}</Text> }
      />
      <StatusBar style = 'auto' />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 25
    },
    item: {
        padding: 10,
        fontSize: 20,
        height: 50
    }
  });


export default Flat