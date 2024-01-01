//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';

// create a component
const CreateAccount = () => {
    return (
        <View style={styles.container}>
            <View style={styles.midView}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Welcome To Antoine Crosby</Text>
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                    <Text style={{ fontSize: 30 }}>Create Your </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 26, fontStyle: 'italic' }}>Account</Text>
                </View>
                <Text style={{ fontSize: 14, marginVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Text>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInputWithLabel
                inputStyle={{width: 157}}
                    placeholder={'First Name'} />
                <TextInputWithLabel
                inputStyle={{width: 157}}
                    placeholder={'Last Name'} />
                    </View>
                <TextInputWithLabel
                    placeholder={'Enter Email Address'} />
                <TextInputWithLabel
                    placeholder={'Phone Number'} />
                <TextInputWithLabel
                    placeholder={'Password'} />
                <TextInputWithLabel
                    placeholder={'Confirm Password'} />


                <BtnComponent
                    btnStyle={{ marginTop: 35, marginBottom: 20 }}
                    btnText={'Sign Up'}
                    img={imagePath.btnForward} />
                <View style={{ justifyContent: 'center', marginVertical: 8, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14 }}>Already have a account? </Text>
                    <Text style={{ fontSize: 14, fontStyle: 'italic', textDecorationLine: 'underline' }}>Sign in</Text>
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
export default CreateAccount;
