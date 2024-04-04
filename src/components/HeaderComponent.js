//import liraries
import React, { Component } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import imagePath from '../config/imagePath';
import { textScale } from '../config';

// create a component
const HeaderComponent = ({
    hdrText,
    onPress = () => { },
    container,
    
}) => {
    return (
        <TouchableOpacity style={{ ...styles.container, ...container }}
        onPress={onPress}>
                <Image
                    style={{ height: 18, width: 9 }}
                    source={imagePath.back} />
                <Text style={{ fontSize: textScale(16) }} >   {hdrText}</Text>
            </TouchableOpacity>

    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 15, 
        alignItems: 'center'
    }
});

//make this component available to the app
export default HeaderComponent;
