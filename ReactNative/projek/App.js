import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer'

import Splash from "./components/Splash";
import Login from "./components/Login";
import About from "./components/About";
import HomeScreen from "./components/Home";
import Detail from "./components/Detail";

import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator ();
const TabContent = () => {
    return (
       <Tab.Navigator initialRouteName="Home" 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-sharp';
            } else if (route.name === 'About') {
              iconName = focused ? 'man-outline' : 'man';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="About" component={About}  />
        </Tab.Navigator>
    )
}


const StackScreen = () => (
    <Stack.Navigator initialRouteName="Splash"   screenOptions={{
            headerShown: false
          }}>
        <Stack.Screen name="Splash" component={Splash} options={{
            headerShown: false
        }} />
        <Stack.Screen name="Login" component={Login} options={{
            headerShown: false
        }} />
        <Stack.Screen name="Home" component={TabContent} />
        <Stack.Screen name="Detail" component={Detail}  />
    </Stack.Navigator>
)

export default function App() {
    const store = createStore(reducer)
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StackScreen />
            </NavigationContainer>
        </Provider>
    );
}
