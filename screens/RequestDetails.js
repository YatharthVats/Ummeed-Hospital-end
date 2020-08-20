import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Card } from "react-native-elements";

const RequestDetails = ({ route, navigation }) => {
  const Request = route.params.request;
  //console.log(Contacts.Contacts.image);
  //console.log(type(Contacts.Contacts.image));

  return (
    <View>
      <Card>
        <Text>{Request.name}</Text>
        <Text>{Request.body}</Text>
        <Image source={{ uri: Request.image }} />
      </Card>
      <Button
        title="Go to Request list"
        onPress={() => navigation.navigate("RequestList")}
      ></Button>
    </View>
  );
};

export default RequestDetails;
