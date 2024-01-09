//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import HeaderComponent from '../../components/HeaderComponent';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import navigationStrings from '../../config/navigationStrings';

// create a component
const MyLoyalityCard1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                onPress={() => navigation.goBack()}
                hdrText={'My Loyality Card'} />
            <View>
                <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 20, marginBottom: 10 }} >My Loyality Card</Text>
                <Text style={{ marginVertical: 10 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                <Text style={{ marginTop: 10, marginBottom: 20 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                <TextInputWithLabel
                    placeholder={'Connect Loyality Card'} />
                <BtnComponent
                    onPress={() => navigation.navigate(navigationStrings.MY_LOYALITY_CARD_2)}
                    btnText={'Connect'}
                    btnStyle={{ marginVertical: 20 }}
                    img={imagePath.btnForward} />
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
export default MyLoyalityCard1;
