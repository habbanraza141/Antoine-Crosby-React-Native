//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import navigationStrings from '../../config/navigationStrings';
import { textScale } from '../../config';
import store from '../../redux/store';
import { saveUserData } from '../../redux/reducers/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showError } from '../../utils/helperFunctions';
const { dispatch } = store;

// create a component
const MyAccount = ({ navigation }) => {


    const onLogout = () =>{
        AsyncStorage.removeItem('userData').then((res)=>{
            console.log("user remove suceessfully..!!")
            dispatch(saveUserData({}))
        }).catch((error)=>{
            showError("Data not found")
        })

    }

    return (
        <View style={styles.container}>
            <SafeAreaView>

                <View style={styles.topView}>
                    <HeaderComponent
                        onPress={() => navigation.goBack()}
                        hdrText={'My Account'} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Image
                            style={{ height: 78, width: 78, marginRight: 15 }}
                            source={imagePath.men3} />
                        <View>
                            <Text style={{ fontSize: textScale(20) }} >Andks Dbnsjndks</Text>
                            <Text style={{ fontSize: textScale(15) }} >jhds@gmakjkds.com</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("ProfileStack")}
                    style={{ height: 45, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2', justifyContent: 'center', marginTop: 20,  }} >

                    <View style={{ flexDirection: 'row', paddingLeft: 25 , alignItems: 'center'}} >
                        <Image
                            resizeMode='contain'
                            style={{ width: 21, height: 18, marginRight: 15 }}
                            source={imagePath.myprofile} />
                        <Text style={{ fontSize: textScale(18) }} >My Profile</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("AddressStack")}
                    style={{ height: 45, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2', justifyContent: 'center' }} >

                    <View style={{ flexDirection: 'row', paddingLeft: 25 , alignItems: 'center'}} >
                        <Image
                            resizeMode='contain'
                            style={{ width: 21, height: 18, marginRight: 15 }}
                            source={imagePath.myaddress} />
                        <Text style={{ fontSize: textScale(18) }} >My Address</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('OrderStack')}
                    style={{ height: 45, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2', justifyContent: 'center' }} >

                    <View style={{ flexDirection: 'row', paddingLeft: 25 , alignItems: 'center'}} >
                        <Image
                            resizeMode='contain'
                            style={{ width: 21, height: 18, marginRight: 15 }}
                            source={imagePath.myorder} />
                        <Text style={{ fontSize: textScale(18) }} >My Orders</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('CardStack')}
                    style={{ height: 45, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2', justifyContent: 'center' }} >

                    <View style={{ flexDirection: 'row', paddingLeft: 25 , alignItems: 'center'}} >
                        <Image
                            resizeMode='contain'
                            style={{ width: 21, height: 18, marginRight: 15 }}
                            source={imagePath.myloyalitycard} />
                        <Text style={{ fontSize: textScale(18) }} >My Loyality Cards</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity

                    onPress={() => navigation.navigate('RewardStack')}
                    style={{ height: 45, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2', justifyContent: 'center' }} >

                    <View style={{ flexDirection: 'row', paddingLeft: 25, alignItems: 'center' }} >
                        <Image
                            resizeMode='contain'
                            style={{ width: 21, height: 18, marginRight: 15 }}
                            source={imagePath.myrewards} />
                        <Text style={{ fontSize: textScale(18) }} >My Rewards</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationStrings.REMAINING_REWARDS)}
                    style={{ height: 45, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2', justifyContent: 'center' }} >

                    <View style={{ flexDirection: 'row', paddingLeft: 25, alignItems: 'center' }} >
                        <Image
                            resizeMode='contain'
                            style={{ width: 21, height: 18, marginRight: 15 }}
                            source={imagePath.myrewards} />
                        <Text style={{ fontSize: textScale(18) }} >Redeem points</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationStrings.MY_WISHLIST)}

                    style={{ height: 45, width: '100%', borderTopWidth: 0.5, borderBottomWidth: 0.5, borderColor: '#e2e2e2', justifyContent: 'center' }} >

                    <View style={{ flexDirection: 'row', paddingLeft: 25 , alignItems: 'center'}} >
                        <Image
                            resizeMode='contain'
                            style={{ width: 21, height: 18, marginRight: 15 }}
                            source={imagePath.mywishlist} />
                        <Text style={{ fontSize: textScale(18) }} >My Wishlist</Text>
                    </View>
                </TouchableOpacity>


                <View style={{ marginVertical: 10, paddingHorizontal: 20 }} >
                    <BtnComponent
                        onPress={onLogout}
                        img={imagePath.logout}
                        btnText={'Logout'} />
                </View>

            </SafeAreaView>
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
