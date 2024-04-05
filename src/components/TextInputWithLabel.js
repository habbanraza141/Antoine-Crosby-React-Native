import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { moderateScaleVertical, textScale , moderateScale, Colors, FontFamily} from '../config';

// import Colors from '../config/Colors';

const TextInputWithLabel = ({
    placeholder,
    inputStyle = {},
    value='',
    onChangeText,
    textStyle
    
}) => {
    return (
        <View style={{ ...styles.inputStyle, ...inputStyle }}>
            <TextInput
            style={{...styles.textStyle,...textStyle}}
            onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        height: moderateScale(52),
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(16),
        backgroundColor: '#efeeec',
        borderColor: '#dcdcdc',
        borderWidth: 1,
        marginVertical: moderateScaleVertical(10),
        justifyContent: 'center',
    },

    textStyle: {
        fontSize: textScale(14),
        fontFamily: FontFamily.regular,
        color: Colors.black
    },

    

});

export default TextInputWithLabel;
