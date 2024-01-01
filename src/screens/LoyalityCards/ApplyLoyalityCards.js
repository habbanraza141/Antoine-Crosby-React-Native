//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import HeaderComponent from '../../components/HeaderComponent';

// create a component
const ApplyLoyalityCards = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                hdrText={'Loyality Cards'} />
            <View>
                <Text style={{  fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Apply Now Loyality Cards</Text>
                <Text style={{ marginVertical: 18 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                <Image 
                resizeMode='contain'
                style={{height: 205, width: '100%'}}
                source={require('../../assets/creditcard.png')}    />
                <Text style={{ marginVertical: 15, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Personal Information</Text>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInputWithLabel
                    inputStyle={{ width: 157 }}
                    placeholder={'First Name'} />
                <TextInputWithLabel
                    inputStyle={{ width: 157 }}
                    placeholder={'Last Name'} />
            </View>
            <TextInputWithLabel
                placeholder={'Enter Email Address'} />
            <TextInputWithLabel
                placeholder={'Delivery Address'} />
            <TextInputWithLabel
                placeholder={'Contact Number'} />
      


            <BtnComponent
                btnStyle={{ marginVertical: 20}}
                btnText={'Apply Now'}
                img={imagePath.btnForward} />
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },

});



//make this component available to the app
export default ApplyLoyalityCards;
