//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import BtnComponent from '../../components/ButtonComponent';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import imagePath from '../../config/imagePath';

// create a component
const EditProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <HeaderComponent
                    onPress={() => navigation.goBack()}
                    hdrText={'Edit Profile'} />
                <View style={{ width: '100%', height: 109, backgroundColor: '#efeeec', flexDirection: 'row', alignItems: 'center', paddingLeft: 30 }} >
                    <ImageBackground
                        style={{ height: 78, width: 78, marginRight: 15, alignItems: 'center', justifyContent: 'center' }}
                        source={require('../../assets/men3.png')} >
                        <View style={{ width: 62, height: 62, borderRadius: 31, backgroundColor: '#14252A', opacity: 0.78, alignItems: 'center', justifyContent: 'center' }} >
                            <Image
                                style={{ width: 16, height: 16 }}
                                source={require('../../assets/icons/edit.png')} />
                        </View>
                    </ImageBackground>

                    <View>
                        <Text style={{ fontSize: 20, color: '#14252A', fontStyle: 'italic', marginBottom: 5 }} >Andks Dbnsjndks</Text>
                        <TouchableOpacity style={{ height: 33, width: 131, backgroundColor: '#D9D9D9', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }} >
                            <Text>Attach File</Text>
                            <Image
                                style={{ width: 16, height: 16 }}
                                source={imagePath.attach} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ marginTop: 25, marginBottom: 15, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }}>Personal Information</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInputWithLabel
                        inputStyle={{ width: 157 }}
                        placeholder={'First Name'} />
                    <TextInputWithLabel
                        inputStyle={{ width: 157 }}
                        placeholder={'Last Name'} />
                </View>
                <TextInputWithLabel
                    placeholder={'Phone Number'} />


                <BtnComponent
                    onPress={() => navigation.goBack()}
                    btnText={'Save'}
                    btnStyle={{ marginVertical: 15 }}
                    img={imagePath.editprofile} />
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
});

//make this component available to the app
export default EditProfile;
