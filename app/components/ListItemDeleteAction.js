import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons name='trash-can' size={35} color={colors.white} />
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        width:70,
        flex:1,
        backgroundColor: colors.danger,
        alignItems:'center',
        justifyContent:'center'
        
    }
})
