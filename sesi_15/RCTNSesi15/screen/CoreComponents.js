import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";

const CoreComponents = () => {
  return (
    <ScrollView>
      <Text>Welcome to Home page</Text>
      <View>
        <Text>This is my first react app's home page</Text>
        <Image
          style={styles.img}
          source={{
            uri: "https://source.unsplash.com/random?sig=",
          }}
        />
      </View>
      <TextInput style={styles.textInput} defaultValue="You can type in me" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    marginTop: 10,
    height: 100,
    width: 100,
  },

  textInput: {
    marginTop: 10,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
});

export default CoreComponents;
