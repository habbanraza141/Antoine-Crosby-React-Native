//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';

// create a component
const LoginAccount = () => {
    return (
        <View style={styles.container}>
            <View style={styles.midView}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Welcome Back</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 26 }}>Login Your </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 26, fontStyle: 'italic' }}>Account</Text>
                </View>
                <Text style={{ fontSize: 14, marginVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Text>
                <TextInputWithLabel
                    placeholder={'Enter Email Address'} />
                <TextInputWithLabel
                    placeholder={'Password'} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
                    <Text style={{ fontSize: 14 }}>Remember Me</Text>
                    <Text style={{ fontSize: 14 }}>Forgot Password?</Text>
                </View>
                <BtnComponent
                    btnStyle={{ marginVertical: 27 }}
                    btnText={'Login Now'}
                    img={imagePath.btnForward} />

                <View style={{ justifyContent: 'center', marginVertical: 8, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14 }}>Don't have a account? </Text>
                    <Text style={{ fontSize: 14, fontStyle: 'italic', textDecorationLine: 'underline' }}>Sign Up</Text>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 96,
        backgroundColor: '#ffffff',
    },

    midView: {
        paddingLeft: 20,
        paddingRight: 20
    }
});

//make this component available to the app
export default LoginAccount;
