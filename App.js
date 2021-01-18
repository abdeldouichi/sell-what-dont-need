import React, { useEffect} from 'react';
import Screen from './app/components/Screen';
import * as ImagePicker from "expo-image-picker"
import { Text } from 'react-native';

export default function App(props) {

    // const requestPermission = async()=>{
    //     result = await ImagePicker.requestCameraRollPermissionsAsync();
    //     if(!result.granted)
    //         alert('You need to enable permission to acces to the library');
    // }
    // useEffect(()=>{
    //     requestPermission();
    // })
    return (
     <Screen><Text>hello</Text></Screen>
    )
}