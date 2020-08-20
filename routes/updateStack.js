import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import CurrCount from "../screens/currCount";
import UpdateCount from "../screens/updateCount";

const Stack = createStackNavigator();

const UpdateStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Current Count"
        component={CurrCount}
        options={{ title: "Current Count" }}
      />
      <Stack.Screen
        name="Update Count"
        component={UpdateCount}
        options={{ title: "Update Count" }}
      />
    </Stack.Navigator>
  );
};

export default UpdateStack;
