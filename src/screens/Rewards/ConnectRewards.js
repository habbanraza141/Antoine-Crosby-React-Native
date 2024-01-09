//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import navigationStrings from '../../config/navigationStrings';

// create a component
const ConnectRewards = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                onPress={()=>navigation.goBack()}
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
            <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 20, marginBottom: 10, marginVertical: 20 }} >Loyality Card Number</Text>
            <TextInputWithLabel 
            inputStyle={{marginVertical: 10}}
            placeholder={'Connect Loyality Card'}/>
            <BtnComponent 
            onPress={()=>navigation.navigate(navigationStrings.AVAILABLE_REWARDS)}
            btnText={'Connect'}
            btnStyle={{marginVertical: 10}}
            img={imagePath.btnForward}/>
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
export default ConnectRewards;
