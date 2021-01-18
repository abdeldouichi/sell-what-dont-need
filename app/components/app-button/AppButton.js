import React from 'react';
import {Button, TouchableOpacity, StyleSheet,Text} from "react-native";
import styles from "./styles"
import colors from "../../config/colors";

 export default function AppButton ({title = "button",color = colors.primary, onPress = () => console.log(title+ " is tapped")}){
        return (
            <TouchableOpacity 
            style={[styles.button,bg(color).color]} 
            onPress={onPress}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
}


const bg =(color) =>  StyleSheet.create({
    color :{
        backgroundColor: color
    }
});