import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Icon from '../components/Icon'
import ListItem from '../components/list-item/ListItem'
import Screen from '../components/Screen'
import colors from '../config/colors'
import ListItemSeparator from '../components/ListItemSeparator'
const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        }
    },   
    {
        title: "My Messages",
        icon: {
            name: "mail",
            backgroundColor: colors.secondary,
        }
    },  
]

export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                    title="Abdesselam DOUICHI"
                    subtitle="abdel.douichi@gmail.com"
                    image={require('../assets/abdel.png')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                  data={menuItems}  
                  keyExtractor={menuItem => menuItem.title}
                  renderItem=
                  {
                      ({item})=>
                      <ListItem 
                        title={item.title}
                        IconComponent={
                            <Icon 
                            name={item.icon.name}
                            backgroundColor={item.icon.backgroundColor}
                            />
                        }
                      />
                }
                ItemSeparatorComponent={ListItemSeparator}
                />   
            </View>
            <ListItem 
                title="Logout"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d"/>}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    screen:{
        backgroundColor:colors.light
    }
})
