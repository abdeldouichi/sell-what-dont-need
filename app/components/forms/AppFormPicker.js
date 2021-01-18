import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppPicker from '../AppPicker'
import {useFormikContext} from 'formik'
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({items,width = "100%", PickerItemComponent,numberOfColumns, placeholder, name}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();
    return (
        <>
            <AppPicker 
                items={items}
                onSelectItem={item => setFieldValue(name,item)}
                PickerItemComponent={PickerItemComponent}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
                numberOfColumns={numberOfColumns}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({})
