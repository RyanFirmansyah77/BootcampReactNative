// import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }


// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }
// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen
// 		  name="Home"
// 		  component={HomeScreen}
// 		  options={{ title: 'Overview' }}
// 		/>
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';


// function LoginScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Login</Text>
//     </View>
//   );
// }

// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>About</Text>
//     </View>
//   );
// }

// function SkillScreen(){
// 	return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Skill</Text>
//     </View>
//   );
// }
// function TabSkillScreen(){
// 	return (
//    	<Tab.Navigator>
//    		<Tab.Screen name='SkillScreen' component={SkillScreen}/>
// 	</Tab.Navigator>
//   );
// }
// function Draw2(){
//    return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Draw</Text>
//     </View>
//   );
// }
// function DrawScreen(){
//   return (
//    	<Draw.Navigator>
//    		<Draw.Screen name='Draw2' component={Draw2}/>
// 	</Draw.Navigator>
//   );
// }
// const Stack =  createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Draw = createDrawerNavigator();

// export default function App2() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//       	<Stack.Screen name="LoginScreen" component={DrawScreen} />
        
//    	  </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function HomeScreen2() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen2</Text>
//     </View>
//   );
// }
// function TabHomeScreen2() {
//   return (
//   	  <Tab.Navigator>
//         <Tab.Screen name="HomeScreen2" component={HomeScreen2} />
//       </Tab.Navigator>
//   );
// }
// function DrawScreen2() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Draw Screen2</Text>
//     </View>
//   );
// }
// function DrawHomeScreen2() {
//   return (
//   	  <Draw.Navigator>
//         <Draw.Screen name="DrawScreen2" component={DrawScreen2} />
//       </Draw.Navigator>
//   );
// }

// const Stack =  createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Draw = createDrawerNavigator();

// function App2() {
//   return (
    
//       <Stack.Navigator>
//         <Stack.Screen name="bangkai" component={TabHomeScreen2} />
        
       
//       </Stack.Navigator>
    
//   );
// }

// function App(){
// 	return (
// 		<NavigationContainer>
// 		 <Draw.Navigator>
//         	<Draw.Screen name="App2" component={App2} />
        
       
//      	 </Draw.Navigator>

// 		</NavigationContainer>
// 	);
// }



// export default App;
import React from 'react';
import {Text , View } from 'react-native';
function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
}
