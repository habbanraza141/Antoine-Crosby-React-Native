//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';

// create a component
const SignupVerification = () => {
    return (
        <View style={styles.container}>
        <View style={styles.midView}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 26 }}>Verification </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 26, fontStyle: 'italic' }}>Code</Text>
            </View>
            <Text style={{ fontSize: 14, marginVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Text>
           

            <BtnComponent
                btnStyle={{ marginVertical: 27 }}
                btnText={'Submit'}
                img={imagePath.btnForward} />

            <View style={{ justifyContent: 'center', marginVertical: 8, flexDirection: 'row' }}>
                <Text style={{ fontSize: 14, fontStyle: 'italic', textDecorationLine: 'underline', textAlign: 'center' }}>Resend Code</Text>
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
export default SignupVerification;
