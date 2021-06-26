import React from 'react'
import { StyleSheet,Image } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ImageItem({onPress, uri}) {
    return (
        <TouchableWithoutFeedback  onPress={onPress}>
             <Image source={{uri}} style={styles.image} />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    image:{
        borderRadius:20,
        width:90,
        height:90,
    }
})
