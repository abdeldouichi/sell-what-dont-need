import React, {useState, useRef} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import ImageInput from './ImageInput';


export default function ImageInputList({imageUris = [], onRemoveImage, onAddImage}) {
    const scrollView = useRef();
    return (
        <View>
        <ScrollView 
            ref={scrollView}
            onContentSizeChange={() => scrollView.current.scrollToEnd()}
            horizontal>
            <View style={styles.container}>
                {imageUris.map(uri => 
                    <View key={uri} style={styles.image}>
                        <ImageInput
                            imageUri={uri} 
                            key={uri} 
                            onChangeImage={() => onRemoveImage(uri)} 
                            />
                    </View>
                    )
                    }
                <ImageInput onChangeImage={uri => onAddImage(uri)}/>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
           flexDirection:"row"
    },
    image:{
          marginRight:10  
    }
})
