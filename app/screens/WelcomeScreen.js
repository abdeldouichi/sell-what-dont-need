import React from 'react';
import { StyleSheet, Text, View,ImageBackground, Image, Button } from 'react-native';
import AppButton from '../components/app-button/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background} 
        source={require('../assets/background.jpg')}
        blurRadius={10}
        >
           <View style={styles.logoContainer}>
               <Image style={styles.logo} source={require('../assets/logo-red.png')} />
               <Text style={styles.tagLine} >Sell What You Don't Need</Text>
           </View>

            <View style={styles.buttonContainer}>
                <AppButton title="Login"  />
                <AppButton title="Register" color={colors.secondary}/>
            </View>
           
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    buttonContainer:{
        width:"100%",
    },
    tagLine:{
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 10
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"

    },
    logo:{
        width:100,
        height:100,
    },
   
});
export default WelcomeScreen;