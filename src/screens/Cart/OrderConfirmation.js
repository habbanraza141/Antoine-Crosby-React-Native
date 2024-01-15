//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';
import BtnComponent from '../../components/ButtonComponent';
import navigationStrings from '../../config/navigationStrings';

// create a component
const OrderConfirmation = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>

                <HeaderComponent
                    onPress={() => navigation.goBack()}
                    hdrText={'Order Confirmation'} />
                <Image
                    style={{ width: 270, height: 241, marginLeft: '5%', marginVertical: 30 }}
                    source={imagePath.thanks} />
                <View style={styles.midView}>
                    <View>
                        <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 28, textAlign: 'center' }} >Thanks</Text>
                        <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 25, textAlign: 'center' }} >Your Order Has Been Placed</Text>
                    </View>
                    <View style={{marginVertical: 15}} >
                        <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 16, textAlign: 'center' }} >Order Number : 123456789</Text>
                        <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 16, textAlign: 'center' }} >loyalty Points Earned : 250 PTS</Text>
                    </View>
                    <BtnComponent
                        btnText={'Continue Shopping'}
                        img={imagePath.btnForward}
                        btnStyle={{ width: '100%' }} />

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
    midView: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default OrderConfirmation;
