import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Requests from "../screens/Requests";
import RequestDetails from "../screens/RequestDetails";

const Stack = createStackNavigator();

const RequestStack = () => {
  return (
    <Stack.Navigator initialRouteName="RequestList">
      <Stack.Screen
        name="RequestList"
        component={Requests}
        options={{ title: "Requested Beds" }}
      />
      <Stack.Screen name="Request Details" component={RequestDetails} />
    </Stack.Navigator>
  );
};

export default RequestStack;
