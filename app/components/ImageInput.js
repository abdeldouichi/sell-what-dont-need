import React, {useEffect} from 'react';
import { StyleSheet, View, Alert, TouchableWithoutFeedback , Image} from 'react-native';
import defaultStyles from '../config/styles';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
export default function ImageInput({imageUri,onChangeImage}) {
    useEffect(()=>{
        requestPermission();
    },[])
    const requestPermission = async()=>{
        result = await ImagePicker.requestCameraRollPermissionsAsync();
        if(!result.granted)
            alert('You need to enable permission to acces to the library');
    }
   

    const handlePress = async()=>{
        if(!imageUri) selectImage()
        else Alert.alert("Delete", 'Are you sure you want to delete this image ?', 
        [
            {text: 'Yes', onPress:()=>onChangeImage(null)},
            {text: 'No'},
        ] )
    }
    const selectImage = async()=>{
        try {
                    const {cancelled, uri} = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        quality: 0.5,
                    });
                    if(!cancelled){
                        onChangeImage(uri);
                    }
                } catch (error) {
                    console.log("Error reading image",error)
                }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri &&
                    <MaterialCommunityIcons
                        name="camera"
                        color={defaultStyles.colors.medium}
                        size={40}
                    />
                }
                {imageUri && <Image source={{uri:imageUri}} style={styles.image}/>}
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: defaultStyles.colors.light,
        borderRadius:15,
        width:100,
        aspectRatio: 1,
        overflow:"hidden",
    },
    image:{
        width:"100%",
        height:"100%",
    }

})
