//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import navigationStrings from '../../config/navigationStrings';

// create a component
const MyAccount = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <HeaderComponent
                    onPress={()=>navigation.goBack()}
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

            <TouchableOpacity 
            onPress={()=>navigation.navigate("ProfileStack")}
            style={{ height: 60, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2' , justifyContent: 'center', marginTop: 20}} >

                <View style={{ flexDirection: 'row',  paddingLeft: 25 }} >
                    <Image
                        resizeMode='contain'
                        style={{ width: 21, height: 18, marginRight: 15 }}
                        source={imagePath.myprofile} />
                    <Text style={{ fontSize: 18 }} >My Profile</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("AddressStack")}
            style={{ height: 60, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2' , justifyContent: 'center'}} >

                <View style={{ flexDirection: 'row',  paddingLeft: 25 }} >
                    <Image
                        resizeMode='contain'
                        style={{ width: 21, height: 18, marginRight: 15 }}
                        source={imagePath.myaddress} />
                    <Text style={{ fontSize: 18 }} >My Address</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate('OrderStack')}
            style={{ height: 60, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2' , justifyContent: 'center'}} >

                <View style={{ flexDirection: 'row',  paddingLeft: 25 }} >
                    <Image
                        resizeMode='contain'
                        style={{ width: 21, height: 18, marginRight: 15 }}
                        source={imagePath.myorder} />
                    <Text style={{ fontSize: 18 }} >My Orders</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate('CardStack')}
            style={{ height: 60, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2' , justifyContent: 'center'}} >

                <View style={{ flexDirection: 'row',  paddingLeft: 25 }} >
                    <Image
                        resizeMode='contain'
                        style={{ width: 21, height: 18, marginRight: 15 }}
                        source={imagePath.myloyalitycard} />
                    <Text style={{ fontSize: 18 }} >My Loyality Cards</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
            
            onPress={()=>navigation.navigate('RewardStack')}
            style={{ height: 60, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2' , justifyContent: 'center'}} >

                <View style={{ flexDirection: 'row',  paddingLeft: 25 }} >
                    <Image
                        resizeMode='contain'
                        style={{ width: 21, height: 18, marginRight: 15 }}
                        source={imagePath.myrewards} />
                    <Text style={{ fontSize: 18 }} >My Rewards</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
             onPress={()=>navigation.navigate(navigationStrings.REMAINING_REWARDS)}
            style={{ height: 60, width: '100%', borderTopWidth: 0.5, borderColor: '#e2e2e2' , justifyContent: 'center'}} >

                <View style={{ flexDirection: 'row',  paddingLeft: 25 }} >
                    <Image
                        resizeMode='contain'
                        style={{ width: 21, height: 18, marginRight: 15 }}
                        source={imagePath.myrewards} />
                    <Text style={{ fontSize: 18 }} >Redeem points</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
                         onPress={()=>navigation.navigate(navigationStrings.MY_WISHLIST)}

            style={{ height: 60, width: '100%', borderTopWidth: 0.5,borderBottomWidth: 0.5, borderColor: '#e2e2e2' , justifyContent: 'center'}} >

                <View style={{ flexDirection: 'row',  paddingLeft: 25 }} >
                    <Image
                        resizeMode='contain'
                        style={{ width: 21, height: 18, marginRight: 15 }}
                        source={imagePath.mywishlist} />
                    <Text style={{ fontSize: 18 }} >My Wishlist</Text>
                </View>
            </TouchableOpacity>


            <View style={{ marginVertical: 30, paddingHorizontal: 20 }} >
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
