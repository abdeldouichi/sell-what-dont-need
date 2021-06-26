import React, { useEffect } from 'react';
import Screen from './app/components/Screen';
import * as ImagePicker from "expo-image-picker"
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
const Drawer = createDrawerNavigator();
export default function App(props) {


  <NavigationContainer>
    <Drawer.Navigator initialRouteName="AccountScreen">
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="Listing Detail" component={ListingDetailScreen} />
      <Drawer.Screen name="Listing Edit" component={ListingEditScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="View Image" component={ViewImageScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
}