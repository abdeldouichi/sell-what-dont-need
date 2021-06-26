import React from 'react'
import { StyleSheet } from 'react-native'
import { AppForm, AppFormField, SubmitButton,AppFormPicker } from '../components/forms'
import Screen from '../components/Screen'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(1000).label("Price"),
    description:Yup.string().label("Description"),
    category:Yup.object().required().nullable().label("Category"), 
})

const categories = [
    {label:"Fourniture", value:"1", backgroundColor:'#fc5c65', icon:'floor-lamp'},
    {label:"Cars", value:"2",backgroundColor:'#fd9644', icon:'car'},
    {label:"Cameras", value:"3",backgroundColor:'#fed330', icon:'lock'},
    {label:"Games", value:"4",backgroundColor:'#26de81', icon:'cards'},
    {label:"Clothing", value:"5",backgroundColor:'#2bcbba', icon:'shoe-heel'},
    {label:"Sports", value:"6",backgroundColor:'#45aaf2', icon:'basketball'},
    {label:"Movies & Music", value:"7",backgroundColor:'#4b7bec', icon:'headphones'},
    {label:"Books", value:"8",backgroundColor:'purple', icon:'book'},
    {label:"Other", value:"9",backgroundColor:'gray', icon:'account'},
]
export default function ListingEditImageScreen() {
    return (
        <Screen style={styles.container}> 
        <AppForm
            initialValues={{title:'',price:'', description:'', category:null}}
            onSubmit={values =>console.log(values)}
            validationSchema={validationSchema}
            >
            <AppFormField
                maxLenght={255}
                placeholder="Title"
                autoCapitalize="none"
                autoCorrect={false}
                name="title"
            />
            <AppFormField
                placeholder="Price"
                keyboardType="numeric"
                name="price"
                maxLenght={8}
                width= {120}
            />
            <AppFormPicker 
                items={categories}
                name="category"
                placeholder="Category"
                width={"50%"}
                PickerItemComponent={CategoryPickerItem}
                numberOfColumns={3}
            />
            <AppFormField
            maxLenght={255}
                multiline
                numberOfLines={3}
                placeholder="Description"
                name="description"
            />
            <SubmitButton title="Post"/>
        </AppForm>
    </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
})
