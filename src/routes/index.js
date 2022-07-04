import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Screens/Login";
import PasswordRecovery from "../Screens/PasswordRecovery";
import CreatePassword from "../Screens/CreatePassword";
import ChangedPassword from "../Screens/ChangedPassword";
import RegisteredUser from "../Screens/RegisteredUser";
import Register from "../Screens/Register";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
            headerShown: false
          }}
        />
        <Stack.Screen
          name="CreatePassword"
          component={CreatePassword}
          options={{
            headerShown: false
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
            title:"Cadastro"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Routes;