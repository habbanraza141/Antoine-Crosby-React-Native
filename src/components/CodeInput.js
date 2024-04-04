import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import imagePath from '../config/imagePath';
import { textScale } from '../config';
// import Colors from '../config/Colors';

const CodeInput = ({
    placeholder,
    inputStyle = {},
rightText,
}) => {
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
            <TextInput
                placeholder={placeholder}
                style={styles.inlineStyle}
            />
            <TouchableOpacity style={styles.right} >
                <Text style={{color: '#fff', fontSize: textScale(12)}} >{rightText} →</Text>

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
        fontSize: 16,
        color: '#70695E',
        flex: 1
    },


    right: {
        width: 106,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#14252A',
        borderRadius: 5
    }

});

export default CodeInput;
