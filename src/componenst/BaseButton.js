import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from "react-native"

// TouchableOpacity => wrapper for custom button
export const BaseButton = ({style={}, textStyle={}, size = 125, ...props}) => {

    return (
        <TouchableOpacity style={[styles(size).radius, style]}>
            <Text style={[styles(size).text, textStyle]} {...props}>{props.title}</Text>
        </TouchableOpacity>
    )

}

const styles = (size) => StyleSheet.create({
    radius: {
        borderRadius: size/2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'#fff',
        borderWidth: 2,
    },
    text: {
        color: '#fff',
        fontSize: size/3
    }
})