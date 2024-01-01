//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';

// create a component
const MyAccount = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <HeaderComponent
                    hdrText={'My Account'} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Image
                        style={{ height: 78, width: 78, marginRight: 15 }}
                        source={imagePath.men3} />
                    <View>
                        <Text style={{ fontSize: 20 }} >Andks Dbnsjndks</Text>
                        <Text style={{ fontSize: 15 }} >jhds@gmakjkds.com</Text>
                    </View>
                </View>
            </View>

            <View style={{ height: 0.5, width: '100%', backgroundColor: '#e2e2e2', marginVertical: 15 }} >
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 25 }} >
                <Image
                    resizeMode='contain'
                    style={{ width: 21, height: 18, marginRight: 15 }}
                    source={imagePath.myprofile} />
                <Text style={{ fontSize: 18 }} >My Profile</Text>
            </View>

            <View style={{ height: 0.5, width: '100%', backgroundColor: '#e2e2e2', marginVertical: 15 }} >
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 25 }} >
                <Image
                    resizeMode='contain'
                    style={{ width: 17, height: 21, marginRight: 19 }}
                    source={imagePath.myaddress} />
                <Text style={{ fontSize: 18 }} >My Address</Text>
            </View>
            

            <View style={{ height: 0.5, width: '100%', backgroundColor: '#e2e2e2', marginVertical: 15 }} >
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 25 }} >
                <Image
                    resizeMode='contain'
                    style={{ width: 18, height: 20, marginRight: 18 }}
                    source={imagePath.myorder} />
                <Text style={{ fontSize: 18 }} >My Orders</Text>
            </View>

            <View style={{ height: 0.5, width: '100%', backgroundColor: '#e2e2e2', marginVertical: 15 }} >
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 25 }} >
                <Image
                    resizeMode='contain'
                    style={{ width: 20, height: 14, marginRight: 16 }}
                    source={imagePath.myloyalitycard} />
                <Text style={{ fontSize: 18 }} >My Loyality Cards</Text>
            </View>

            <View style={{ height: 0.5, width: '100%', backgroundColor: '#e2e2e2', marginVertical: 15 }} >
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 25 }} >
                <Image
                    resizeMode='contain'
                    style={{ width: 23, height: 21, marginRight: 13 }}
                    source={imagePath.myrewards} />
                <Text style={{ fontSize: 18 }} >My Rewards</Text>
            </View>

            <View style={{ height: 0.5, width: '100%', backgroundColor: '#e2e2e2', marginVertical: 15 }} >
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 25 }} >
                <Image
                    resizeMode='contain'
                    style={{ width: 23, height: 21, marginRight: 13 }}
                    source={imagePath.myrewards} />
                <Text style={{ fontSize: 18 }} >Redeem points</Text>
            </View>

            <View style={{ height: 0.5, width: '100%', backgroundColor: '#e2e2e2', marginVertical: 15 }} >
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 25 }} >
                <Image
                    resizeMode='contain'
                    style={{ width: 21, height: 18, marginRight: 15 }}
                    source={imagePath.mywishlist} />
                <Text style={{ fontSize: 18 }} >My Wishlist</Text>
            </View>

            <View style={{marginVertical: 30, paddingHorizontal: 20}} >
                <BtnComponent
                img={imagePath.logout}
                    btnText={'Logout'} />
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        paddingHorizontal: 20
    }
});

//make this component available to the app
export default MyAccount;
