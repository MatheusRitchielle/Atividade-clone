import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import InitialPage from "../Screens/InitialPage";
import Favorites from "../Screens/Favorites";
import Cart from "../Screens/Cart"

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Cart"

            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#00ffff",
                    borderTopColor: "transparent",
                },
                tabBarActiveTintColor: 'gray',
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="InitialPage"
                component={InitialPage}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    ),
                    title: "Marketplace",
                    headerTitleAlign: "center",
                    headerTransparent: true

                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="star" size={size} color={color} />
                    ),
                    title: "Favoritos",
                    headerTitleAlign: "center",
                    headerTransparent: true
                }}
            />
      <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="shopping-cart" size={size} color={color} />
                    ),
                    title: "Carrinho",
                    headerTitleAlign: "center",
                    headerTransparent: true
                }}
            />
        </Tab.Navigator>

    )
}

export default TabNavigator;