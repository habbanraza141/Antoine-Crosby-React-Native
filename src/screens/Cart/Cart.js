//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';
import BtnComponent from '../../components/ButtonComponent';
import navigationStrings from '../../config/navigationStrings';


// create a component
const Cart = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>

                <HeaderComponent
                    onPress={() => navigation.goBack()}
                    hdrText={'Cart'} />
                <View style={{ height: 121, backgroundColor: '#F4F5F7', width: '100%', padding: 7, flexDirection: 'row', alignItems: 'center' }}>

                    <View style={{ width: 107, height: 110, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }} >
                        <Image
                            source={imagePath.fashionBag}
                            style={{ height: 74, width: 74 }} />
                    </View>
                    <View style={{ justifyContent: 'space-between', marginLeft: 15, height: 100 }} >
                        <Text style={{ fontSize: 16 }} >Shopping Bag</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }} >USD 87.00</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }} >Sub Total #45</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 210 }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: 75, justifyContent: 'space-between' }} >

                                <TouchableOpacity style={{ width: 24, height: 24, borderRadius: 12, justifyContent: 'center', backgroundColor: '#ffffff', alignItems: 'center' }} >
                                    <Image 
                                    style={{height: 17, width: 17}}
                                    source={require('../../assets/icons/minus.png')}/>
                                </TouchableOpacity>
                                <Text style={{ fontSize: 16 }} >3</Text>
                                <TouchableOpacity style={{ width: 24, height: 24, borderRadius: 12, justifyContent: 'center', backgroundColor: '#ffffff', alignItems: 'center' }} >
                                <Image 
                                    style={{height: 17, width: 17}}
                                    source={require('../../assets/icons/add.png')}/>                             
                                       </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ height: 23, width: 24, borderRadius: 12, backgroundColor: '#DFDFDF', alignItems: 'center', justifyContent: 'center', }}>
                                <Image
                                    style={{ height: 12, width: 11 }}
                                    source={imagePath.bin} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <BtnComponent
                    btnText={'Update Cart'}
                    btnTextStyle={{ color: '#14252A' }}
                    btnStyle={{ backgroundColor: '#fff', borderColor: '#14252A', borderWidth: 1, marginVertical: 20 }}
                    img={imagePath.btnForward}
                    imgStyle={{ tintColor: '#14252A' }} />

                <View style={{ height: 287, backgroundColor: '#14252A', marginVertical: 5, paddingHorizontal: 20, paddingVertical: 40, justifyContent: 'space-between' }}>
                    <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 20, color: '#fff' }}>Order Details</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                    </View>
                </View>

                <BtnComponent
                    onPress={() => navigation.navigate(navigationStrings.CHECKOUT1)}
                    btnStyle={{ marginVertical: 20 }}
                    btnText={'Proceed To CheckOut'} />

            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
});

//make this component available to the app
export default Cart;
