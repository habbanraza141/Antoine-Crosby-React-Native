//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import HeaderComponent from '../../components/HeaderComponent';
import navigationStrings from '../../config/navigationStrings';

// create a component
const ApplyLoyalityCards = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.mainView} >
                <HeaderComponent
                    onPress={() => navigation.goBack()}
                    hdrText={'Loyality Cards'} />
                <ScrollView
                showsVerticalScrollIndicator={false}>

                    <View>
                        <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Apply Now Loyality Cards</Text>
                        <Text style={{ marginVertical: 18 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
                        <Image
                            resizeMode='contain'
                            style={{ height: 205, width: '100%' }}
                            source={require('../../assets/creditcard.png')} />
                        <Text style={{ marginVertical: 15, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Personal Information</Text>

                    </View>
                    <View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInputWithLabel
                                inputStyle={{ width: 157 }}
                                placeholder={'First Name'} />
                            <TextInputWithLabel
                                inputStyle={{ width: 157 }}
                                placeholder={'Last Name'} />
                        </View>
                        <TextInputWithLabel
                            placeholder={'Enter Email Address'} />
                        <TextInputWithLabel
                            placeholder={'Delivery Address'} />
                        <TextInputWithLabel
                            placeholder={'Contact Number'} />
                        <BtnComponent
                            onPress={() => navigation.navigate(navigationStrings.MY_LOYALITY_CARD_1)}
                            btnStyle={{ marginVertical: 20 }}
                            btnText={'Apply Now'}
                            img={imagePath.btnForward} />
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

    mainView: {
        flex: 1,
    }

});



//make this component available to the app
export default ApplyLoyalityCards;
