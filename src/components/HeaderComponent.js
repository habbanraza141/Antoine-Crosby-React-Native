//import liraries
import React, { Component } from 'react';
import { Image, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import imagePath from '../config/imagePath';

// create a component
const HeaderComponent = ({
    hdrText,
    onPress = () => { },
    container,

}) => {
    return (
        <TouchableOpacity style={{ ...styles.container, ...container }}>
                <Image
                    style={{ height: 18, width: 9 }}
                    source={imagePath.back} />
                <Text style={{ fontSize: 16 }} >   {hdrText}</Text>
            </TouchableOpacity>

    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: 57,
        flexDirection: 'row',
        marginBottom: 30
    }
});

//make this component available to the app
export default HeaderComponent;
