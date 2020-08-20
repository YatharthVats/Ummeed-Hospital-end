import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Card } from "react-native-elements";

const CurrCount = ({ navigation }) => {
  const [currBeds, setCurrBeds] = useState(0);
  const [currVentilators, setCurrVentilators] = useState(0);
  useEffect(() => {
    //call update api here
    setCurrBeds(200);
    setCurrVentilators(100);
  }, []);

  return (
    <View>
      <Card style={{ margin: "5", flex: "1" }}>
        <Text>Current Count of Beds:{currBeds}</Text>
      </Card>
      <Card style={{ margin: "5", flex: "1" }}>
        <Text>Current Count of Ventilators:{currVentilators}</Text>
      </Card>
      <Button
        style={{ margin: "5", flex: "1" }}
        title="Update Data"
        onPress={() => {
          navigation.navigate("Update Count");
        }}
      ></Button>
    </View>
  );
};

export default CurrCount;
