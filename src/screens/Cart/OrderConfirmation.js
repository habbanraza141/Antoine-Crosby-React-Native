//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';
import BtnComponent from '../../components/ButtonComponent';

// create a component
const OrderConfirmation = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                hdrText={'Order Confirmation'} />
            <Image
                style={{ width: 270, height: 241, marginLeft: '5%' , marginVertical: 30}}
                source={imagePath.thanks} />
            <View style={styles.midView}>
                <View>
                    <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 28 , textAlign: 'center'}} >Thanks</Text>
                    <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 25 , textAlign: 'center'}} >Your Order Has Been Placed</Text>
                </View>
                <View>
                    <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 16 , textAlign: 'center'}} >Order Number : 123456789</Text>
                    <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 16 , textAlign: 'center'}} >loyalty Points Earned : 250 PTS</Text>
                </View>
                <BtnComponent
                btnText={'Continue Shopping'}
                img={imagePath.btnForward} 
                btnStyle={{width: '100%'}}/>

            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    midView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 218,
    }
});

//make this component available to the app
export default OrderConfirmation;
