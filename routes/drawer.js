import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

// stacks
import Home from "../screens/Home";
import UpdateStack from "./updateStack";
import RequestStack from "./requestStack";

// drawer navigation options
const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Count Update" component={UpdateStack} />
        <Drawer.Screen name="Requests" component={RequestStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
