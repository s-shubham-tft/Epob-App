import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EpobScreen from '../screens/EpobScreen'
import HomeScreen from '../screens/HomeScreen'

const AppStack = createStackNavigator();
export default function NavigationApp() {
  return (
<NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    <AppStack.Screen name="EpobScreen" component={EpobScreen}  options={{ title: 'EpobScreen' }}/>
    <AppStack.Screen name="HomeScreen" component={HomeScreen}  options={{ title: 'HomeScreen' }}/>

    </AppStack.Navigator>

    </NavigationContainer>
  );
}
 