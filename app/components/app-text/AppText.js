import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import defaultStyles from '../../config/styles';

export default function AppText({children, style, ...otherprops}) {
    return (
            <Text style={[styles.text, style]} {...otherprops}>{children}</Text>
        
    )
}

const styles = StyleSheet.create({
    text:defaultStyles.text
})
