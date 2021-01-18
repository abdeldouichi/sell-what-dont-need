import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'
import Screen from '../components/Screen'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(2).label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),

})
export default function RegisterScreen() {
    return (
        <Screen style={styles.container}> 
            <AppForm
                initialValues={{name:'',email:'', password:''}}
                onSubmit={values =>console.log(values)}
                validationSchema={validationSchema}
                >
                <AppFormField
                    icon="account"
                    placeholder="Name"
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="name"
                />
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
})
