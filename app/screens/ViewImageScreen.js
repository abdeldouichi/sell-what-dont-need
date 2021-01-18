import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons"

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcone}><MaterialCommunityIcons name="close" size={30} color="white"/></View>
            <View style={styles.deleteIcone}><MaterialCommunityIcons name="delete" size={30}  color="white"/></View>
            <Image resizeMode="contain" source={require('../assets/chair.jpg')} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcone:{
      position: "absolute",
      top:40,
      left:30
    },  
    container:{
      flex:1,
      backgroundColor: colors.black
    },
    deleteIcone:{
        position: "absolute",
        top:40,
        right:30
    },
    image: {
        width: "100%",
        height: "100%"
    }
})
export default ViewImageScreen;