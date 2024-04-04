//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { textScale } from '../config';

// create a component
const BtnComponent = ({
    onPress = () => { },
    btnText,
    btnTextStyle = {},
    btnStyle = {},
    img,
    imgStyle = {}
}

) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{ ...styles.btnStyle, ...btnStyle }}>
            <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }} >{btnText}</Text>
            <Image
                source={img}
                resizeMode='contain'
                style={{ ...styles.imgStyle, ...imgStyle }} />
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#14252A',
        height: 58,
        paddingLeft: 40,
        paddingRight: 40
    },

    btnTextStyle: {
        fontSize: textScale(16),
        color: 'white',
    },

    imgStyle: {
        height: 14,
        width: 31
    }
});

//make this component available to the app
export default BtnComponent;
