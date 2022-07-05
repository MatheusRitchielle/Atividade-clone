import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import InitialPage from "../Screens/InitialPage";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#00ffff",
                    borderTopColor: "#121212",
                },
                tabBarActiveTintColor: 'gray',
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="InitialPage"
                component={InitialPage}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />


        </Tab.Navigator>

    )
}

export default TabNavigator;