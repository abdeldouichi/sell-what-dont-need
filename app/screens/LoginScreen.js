import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import Screen from '../components/Screen'
import * as Yup from 'yup'
import {SubmitButton, AppForm, AppFormField} from '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),

})
export default function LoginScreen() {
    
    return (
        <Screen style={styles.container}>
           <Image
                style={styles.logo} 
                source={require("../assets/logo-red.png")}/> 
               
                <AppForm
                 initialValues={{email:'', password:''}}
                 onSubmit={values =>console.log(values)}
                 validationSchema={validationSchema}
                 >
                    <AppFormField
                        icon="email"
                        placeholder="Email"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        name="email"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        name="password"
                    />
                    <SubmitButton title="Login"/>
                         
                </AppForm>
                
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        width:80,
        height:80,
        alignSelf:'center',
        marginBottom:20,
        marginTop:50,
    }
})
