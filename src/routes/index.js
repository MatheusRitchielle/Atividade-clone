import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Screens/Login";
import PasswordRecovery from "../Screens/PasswordRecovery";
import CreatePassword from "../Screens/CreatePassword";
import ChangedPassword from "../Screens/ChangedPassword";
import RegisteredUser from "../Screens/RegisteredUser";
import Register from "../Screens/Register";
import TabNavigator from '../TabNavigator/index';
import SuccessfulPurchase from "../Screens/SuccessfulPurchase";
import ProductRegister from "../Screens/ProductRegister";

const Stack = createNativeStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Navigator initialRouteName="TabNavigator"> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="PasswordRecovery"
          component={PasswordRecovery}
          options={{
            headerTransparent: true,
            title: false
          }}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePassword}
          options={{
            headerTransparent: true,
            title: false,
          }}
        />
        <Stack.Screen
          name="ChangedPassword"
          component={ChangedPassword}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="RegisteredUser"
          component={RegisteredUser}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerTransparent: true,
            title: "Cadastro",
            headerTitleAlign: "center"
          }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerTransparent: true,
            title: false
          }}
        />
        <Stack.Screen
          name="SuccessfulPurchase"
          component={SuccessfulPurchase}
          options={{
            headerTransparent: true,
            title: false,
            headerShown: false
          }}
        />
        <Stack.Screen
          name="ProductRegister"
          component={ProductRegister}
          options={{
            headerTransparent: true,
            headerTitleAlign: "center",
            title: "Cadastro de Produto"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Routes;

