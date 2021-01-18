import React, {useState} from 'react'
import { Modal, StyleSheet, Text, View , Button} from 'react-native'
import AppText from './app-text/AppText'
import defaultStyles from '../config/styles'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Screen from './Screen'
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import PickerItem from './PickerItem'
export default function AppPicker({icon,width,placeholder,numberOfColumns,onSelectItem, PickerItemComponent = PickerItem, selectedItem,items}) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, {width}]}>
                    {
                        icon && 
                        <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium}
                        style={styles.icon}
                        />
                    }
                {selectedItem
                    ? <AppText style={styles.text}>{selectedItem.label}</AppText>
                    : <AppText style={styles.placeholder}>{placeholder}</AppText>
                }
                <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                    <Screen>
                        <Button title="Close" onPress={()=> setModalVisible(false)} />
                        <FlatList
                            numColumns={numberOfColumns}
                            data={items}
                            keyExtractor={item=> item.value.toString()}
                            renderItem={
                                ({item}) => 
                                    <PickerItemComponent
                                    item={item}
                                     label={item.label} 
                                     onPress={()=>{
                                         setModalVisible(false);
                                         onSelectItem(item);
                                     }}
                                     />
                            }
                        />
                    </Screen>
            </Modal> 
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width:'100%',
        padding:15,
        marginVertical:10
    },
    icon: {
        marginRight:10,
    },
    placeholder:{
        flex:1,
        color:defaultStyles.colors.medium,
    },
    text:{
        flex:1,
    }
})
