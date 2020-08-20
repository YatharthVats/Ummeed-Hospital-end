import React, { useState } from "react";
import {
  Linking,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Card } from "react-native-elements";

const Requests = ({ navigation }) => {
  const [requests, setRequests] = useState([
    {
      name: "ABC Request",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
      number: "000000000",
      image:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    },
    {
      name: "PQR Request",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
      number: "1111111111",
      image:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    },
    {
      name: "XYZ Request",
      rating: 3,
      body: "lorem ipsum",
      key: "3",
      number: "2222222222",
      image:
        "https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png",
    },
  ]);

  const RequestsList = requests.map((item, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          navigation.navigate("Request Details", { request: item });
        }}
      >
        <Card>
          <Text>Hello</Text>
          <Text>{item.name}</Text>
        </Card>
      </TouchableOpacity>
    );
  });

  return <View style={styles.container}>{RequestsList}</View>;
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

export default Requests;
