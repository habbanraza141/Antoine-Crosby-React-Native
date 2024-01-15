//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import HeaderComponent from '../../components/HeaderComponent';
import TextInputWithLabel from '../../components/TextInputWithLabel';

// create a component
const MyLoyalityCard3 = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.mainView} >

                <HeaderComponent
                    hdrText={'My Loyality Card'} />
                <View>
                    <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 20, marginBottom: 10 }} >My Loyality Card</Text>
                    <Text style={{ marginVertical: 10 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                    <View style={{ height: 44, width: '100%', backgroundColor: '#F4F5F7', marginVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 }} >
                        <Text>Loyality Card Number</Text>
                        <Text>50050023</Text>
                    </View>

                    <View style={{ height: 239, width: '100%', backgroundColor: '#fcf2f2', marginVertical: 10, alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 15, borderRadius: 15 }} >
                        <Image
                            source={imagePath.loyalitycard}
                            style={{ height: 171, width: 304 }} />
                        <View style={{ height: 32, width: 108, backgroundColor: '#E31313', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }} >
                            <Text style={{ color: '#fff', fontWeight: 'bold' }} >Expired</Text>
                            <Image
                                style={{ height: 10, width: 10 }}
                                source={imagePath.connected} />
                        </View>
                    </View>
                    <BtnComponent
                        btnText={'Apply'}
                        btnStyle={{ marginVertical: 20 }}
                        img={imagePath.btnForward} />

                </View>
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
export default MyLoyalityCard3;
