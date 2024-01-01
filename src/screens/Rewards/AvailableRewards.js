//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';

// create a component
const AvailableRewards = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                hdrText={'My Rewards'} />
            <View style={{ height: 109, width: '100%', backgroundColor: '#F4F5F7', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }} >
                <View>
                    <Text style={{ fontStyle: 'italic' }} >Available points</Text>
                    <Text style={{ fontSize: 31, fontWeight: 'bold' }} >250 PTS</Text>
                </View>
                <Image
                    style={{ height: 52, width: 52 }}
                    source={imagePath.points} />
            </View>
            <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 20, marginBottom: 10, marginVertical: 20 }} >My Rewards</Text>
            <View style={{ height: 108, width: '100%', borderColor: '#14252A', borderWidth: 1, marginVertical: 10, flexDirection: 'row', alignItems: 'center', paddingLeft: 7 }} >
                <View style={{ height: 94, width: 97, backgroundColor: '#F4F5F7', justifyContent: 'center', alignItems: 'center' }} >
                    <Image
                        style={{ height: 58, width: 58 }}
                        source={imagePath.gift} />
                </View>
                <View style={{ justifyContent: 'space-between', height: 68, marginLeft: 20 }} >
                    <Text style={{ fontSize: 12 }} >Order No. #12345</Text>
                    <Text style={{ fontWeight: 'bold', marginTop: 7, fontSize: 12 }}  >Loyalty Points 200 PTS</Text>
                    <Text style={{ fontSize: 11 }} >25 October 2023</Text>
                </View>
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
});

//make this component available to the app
export default AvailableRewards;
