//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import CodeInput from '../../components/CodeInput';
import BtnComponent from '../../components/ButtonComponent';
import navigationStrings from '../../config/navigationStrings';

// create a component
const Checkout4 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.mainView} >

                <HeaderComponent
                    onPress={() => navigation.goBack()}
                    hdrText={'CheckOut'} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74 }} >Shipping Details</Text>
                    <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74 }} >Add Address</Text>
                    <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74, }} >Payment Details</Text>
                    <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74, }} >Order Summary</Text>
                </View>
                <View style={{ marginVertical: 20, height: 6, width: '100%', backgroundColor: '#14252A', borderRadius: 3 }}>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} >

                    <Text style={{ marginVertical: 10, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Review Order</Text>

                    <View style={{ height: 108, backgroundColor: '#F4F5F7', width: '100%', padding: 7, flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                        <View style={{ width: 97, height: 94, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }} >
                            <Image
                                style={{ width: 73, height: 73 }}
                                resizeMode='contain'
                                source={imagePath.fashionBag} />
                        </View>
                        <View style={{ height: 68, width: 120, justifyContent: 'space-between', marginLeft: 15 }} >
                            <Text style={{ fontSize: 16, fontStyle: 'italic' }} >Shopping Bag</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold' }} >USD 87.00</Text>
                            <Text style={{ fontSize: 11 }} >Size M | #2</Text>
                        </View>
                    </View>
                    <Text style={{ marginVertical: 10, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Promo Code</Text>
                    <CodeInput
                        placeholder={'Enter Code'}
                        rightText={'Apply Code'} />
                    <Text style={{ marginVertical: 10, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Redeem Loyality Points</Text>
                    <CodeInput
                        placeholder={'Enter Code'}
                        rightText={'Redeem Now'} />
                    <Text>Available points: 2500 </Text>
                    <View style={{ height: 287, backgroundColor: '#14252A', marginTop: 25, paddingHorizontal: 20, paddingVertical: 40, justifyContent: 'space-between', borderRadius: 5 }}>
                        <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 20, color: '#fff' }}>Payment</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                            <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Loyality Point Discount</Text>
                            <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Shipping</Text>
                            <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Sub Total</Text>
                            <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Total</Text>
                            <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                        </View>
                    </View>
                    <BtnComponent
                    btnStyle={{marginVertical: 20}}
                        onPress={() => navigation.navigate(navigationStrings.ORDER_CONFIRMATION)}
                        btnText={'Confirm Order'}
                        img={imagePath.btnForward} />
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
export default Checkout4;
