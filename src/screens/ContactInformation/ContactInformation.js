//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';

// create a component
const ContactInformation = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false} >



                    <HeaderComponent
                        onPress={() => navigation.goBack()}
                        hdrText={'Contact Information'} />
                    <View>
                        <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Contact Information</Text>
                        <Text style={{ marginVertical: 18 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                    </View>
                    <View style={{ height: 159, width: '100%', backgroundColor: '#14252A' }}>
                        <Text style={{ color: '#fff', fontSize: 18, marginVertical: 15, fontStyle: 'italic', paddingLeft: 15, fontWeight: '600' }} >Store Info</Text>
                        <View style={{ height: 0.18, width: '100%', backgroundColor: '#fffffe' }} >

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingVertical: 20 }} >
                            <Image
                                source={require('../../assets/icons/shop2.png')}
                                style={{ height: 14, width: 14, marginRight: 15, tintColor: '#fff' }} />
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600', fontStyle: 'italic' }} >Antoine Crosby</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, }} >
                            <Image
                                resizeMode='contain'
                                source={require('../../assets/icons/email2.png')}
                                style={{ height: 14, width: 14, marginRight: 15 }} />
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600', fontStyle: 'italic' }} >contactus@antoinecrosby.com</Text>
                        </View>
                    </View>
                    <View style={{ height: 159, width: '100%', backgroundColor: '#dcdcdc', marginVertical: 20 }}>
                        <Text style={{ fontSize: 18, marginVertical: 15, fontStyle: 'italic', paddingLeft: 15, fontWeight: '600' }} >Outlet 1</Text>
                        <Text style={{ marginVertical: 5, fontStyle: 'italic', paddingLeft: 15, fontWeight: '600', color: '#70695e' }} >jvbdf fdbcjdh djsbf sdbfd hre jasbd bd</Text>
                        <Text style={{ marginVertical: 5, fontStyle: 'italic', paddingLeft: 15, fontWeight: '600', color: '#70695e' }} >cnjsnc@bfdjbd.com</Text>
                        <Text style={{ marginVertical: 5, fontStyle: 'italic', paddingLeft: 15, fontWeight: '600', color: '#70695e' }} >+934 7834 3746</Text>

                    </View>
                    <View style={{ height: 159, width: '100%', backgroundColor: '#dcdcdc' , marginBottom: 20}}>
                        <Text style={{ fontSize: 18, marginVertical: 15, fontStyle: 'italic', paddingLeft: 15, fontWeight: '600' }} >Outlet 2</Text>
                        <Text style={{ marginVertical: 5, fontStyle: 'italic', paddingLeft: 15, fontWeight: '600', color: '#70695e' }} >jvbdf fdbcjdh djsbf sdbfd hre jasbd bd</Text>
                        <Text style={{ marginVertical: 5, fontStyle: 'italic', paddingLeft: 15, fontWeight: '600', color: '#70695e' }} >cnjsnc@bfdjbd.com</Text>
                        <Text style={{ marginVertical: 5, fontStyle: 'italic', paddingLeft: 15, fontWeight: '600', color: '#70695e' }} >+934 7834 3746</Text>
                    </View>
                </ScrollView>
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
export default ContactInformation;
