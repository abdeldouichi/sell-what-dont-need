import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import AppText from '../components/app-text/AppText'
import ListItem from '../components/list-item/ListItem'
import colors from '../config/colors'

export default function ListingDetailScreen() {
    return (
        <View>
                <Image 
                style={styles.image}
                source={require("../assets/jacket.jpg")}/>
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>Res jacket for sell</AppText>
                    <AppText style={styles.subtitle}>$200</AppText>
                    <View style={styles.userContainer}> 
                        <ListItem 
                            image={require("../assets/abdel.png")} 
                            title="Abdesselam DOUICHI" 
                            subtitle="5 Listing"
                        />
                    </View>

                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height: 300
    },
    subtitle:{
        color:colors.secondary,
        fontWeight:"bold",
        fontSize: 20,
        marginVertical:10,
   },
   detailsContainer:{
    padding:20,
    },
   title:{
        marginBottom:7,
        fontSize:24,
        fontWeight:"500"
   },
   userContainer:{
        marginVertical:50,
   },
})
