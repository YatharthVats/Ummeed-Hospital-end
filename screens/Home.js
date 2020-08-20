import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Testing!</Text>

      <Button
        style={styles.button}
        title="Current Beds and Ventilators Count "
        onPress={() => navigation.navigate("Count Update")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 10,
  },
});

export default Home;
