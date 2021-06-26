import React from 'react'
import { StyleSheet, Text, View , TouchableWithoutFeedback} from 'react-native'
import AppText from './app-text/AppText'
import Icon from './Icon'

export default function CategoryPickerItem({item, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
                <AppText style={styles.label}>{item.label}</AppText>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:15,
        alignItems:"center",
        width:"33%"
    },
    label:{
         marginTop :5,
         textAlign:'center'  
    }
})
