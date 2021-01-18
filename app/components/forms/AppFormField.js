import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import {useFormikContext} from 'formik'

export default function AppFormField({name,width, ...otherprops}) {
    const {handleChange, errors, setFieldTouched, touched} = useFormikContext();
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={()=> setFieldTouched(name)}
                {...otherprops}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({})
