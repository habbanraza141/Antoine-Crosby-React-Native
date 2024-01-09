//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import navigationStrings from '../../config/navigationStrings';

// create a component
const MyProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                onPress={()=>navigation.goBack()}
                hdrText={'My Profile'} />
            <View style={{ width: '100%', height: 109, backgroundColor: '#14252A', flexDirection: 'row', alignItems: 'center', paddingLeft: 30 }} >
                <Image
                    style={{ height: 78, width: 78, marginRight: 15 }}
                    source={imagePath.men3} />
                <View>
                    <Text style={{ fontSize: 20, color: '#fff', fontStyle: 'italic' }} >Andks Dbnsjndks</Text>
                    <Text style={{ fontSize: 15, color: '#fff' }} >jhds@gmakjkds.com</Text>
                </View>
            </View>
            <Text style={{ marginTop: 25, marginBottom: 15, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }}>Personal Information</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

                <View style={styles.infoStyleAbove} >
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }} >First Name*</Text>
                    <Text style={styles.inlineStyle}>Antoine</Text>

                </View>
                <View style={styles.infoStyleAbove} >
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }} >Last Name*</Text>
                    <Text style={styles.inlineStyle}>Cros</Text>

                </View>
            </View>

            <View style={styles.infoStyle} >
                <Text style={{ fontSize: 12, fontWeight: 'bold' }} >Email Address</Text>
                <Text style={styles.inlineStyle}>antoine-cros@gmail.com</Text>

            </View>
            <View style={styles.infoStyle} >
                <Text style={{ fontSize: 12, fontWeight: 'bold' }} >Phone Number</Text>
                <Text style={styles.inlineStyle}>+92345 767 767667</Text>

            </View>
            <View style={styles.changePassword} >
                <Text style={{ fontSize: 12, fontWeight: 'bold' }} >Password*</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    <Text style={styles.inlineStyle}>*********</Text>
                    <TouchableOpacity
                      onPress={()=>navigation.navigate(navigationStrings.CHANGE_PASSWORD)}>
                        <Text style={{ fontSize: 12, fontWeight: '600', fontStyle: 'italic', textDecorationLine: 'underline' }} >Change Password</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <BtnComponent
                onPress={()=>navigation.navigate(navigationStrings.EDIT_PROFILE)}
                btnText={'Edit Profile'}
                btnStyle={{ marginVertical: 15 }}
                img={imagePath.editprofile} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    infoStyle: {
        height: 61,
        backgroundColor: '#efeeec',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 12
    },
    infoStyleAbove: {
        width: 158,
        height: 61,
        backgroundColor: '#efeeec',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 12
    },
    changePassword: {
        height: 61,
        backgroundColor: '#efeeec',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 12
    },

    inlineStyle: {
        fontSize: 16,
        color: '#3E3830',
    },
});

//make this component available to the app
export default MyProfile;
