import React from "react";
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  StyleSheet
} from "react-native";

let posts = []

for (let i = 1; i <= 10; i++){
    posts.push({
        title : `Title ${i}`,
        description : `Deskripsi untuk title ${i}`
    })
}

const Scrolling = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {
        posts.map((post, idx) => (
          <View style={styles.box} key={idx}>
            <Text style={styles.title}>{post.title}</Text>
            <Text>{post.description}</Text>
          </View>
        ))
        }
      </ScrollView>
      <StatusBar styles = 'auto' />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 25
    },
    scroll: {
      backgroundColor : '#f0f4f5',
      padding: 10
    },
    box: {
      backgroundColor : '#498391',
      marginBottom: 10,
      paddinh: 10
    },
    title: {
      fontSize: 20,
      fontWeight : 'bold'
    },
  });


export default Scrolling