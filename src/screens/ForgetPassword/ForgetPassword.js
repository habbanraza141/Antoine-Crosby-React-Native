//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';

// create a component
const ForgetPassword = () => {
    return (
        <View style={styles.container}>
        <View style={styles.midView}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 26 }}>Forget </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 26, fontStyle: 'italic' }}>Password</Text>
            </View>
            <Text style={{ fontSize: 14, marginVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Text>
           
            <TextInputWithLabel 
            placeholder={'Enter Email Address'}/>
            <BtnComponent
                btnStyle={{ marginTop: 20 , marginBottom: 20}}
                btnText={'Submit'}
                img={imagePath.btnForward} />

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
export default ForgetPassword;
