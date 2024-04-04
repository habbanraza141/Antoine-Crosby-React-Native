import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { textScale } from '../config';
// import Colors from '../config/Colors';

const TextInputWithLabel = ({
    placeholder,
    inputStyle = {},
    img,
    imgStyle,
}) => {
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
            <TextInput
                placeholder={placeholder}
                style={styles.inlineStyle}
            />
            <TouchableOpacity>
                <Image
                    source={img}
                    resizeMode='contain'
                    style={{ ...styles.imgStyle, ...imgStyle }} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        alignItems: 'center',
        height: 48,
        backgroundColor: '#efeeec',
        flexDirection: "row",
        marginVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#dcdcdc'
    },

    inlineStyle: {
        color: '#1B1000',
        flex: 1
    },

    labelTextStyle: {
        fontSize: textScale(14),
        color: 'black'
    },

    imgStyle: {
        height: 16,
        width: 18
    }

});

export default TextInputWithLabel;
