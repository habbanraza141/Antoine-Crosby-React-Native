//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';

// create a component
const OrderNumber = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                hdrText={'Order Id#'}
                container={{ marginBottom: 10, paddingHorizontal: 20 }} />

            <View style={{ paddingHorizontal: 20 }} >
                <Text style={{ marginVertical: 20, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }}>Order Details</Text>
                <View style={{ height: 108, backgroundColor: '#F4F5F7', width: '100%', padding: 7, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 15 }}>
                    <View style={{ width: 97, height: 94, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }} >
                        <Image
                            style={{ width: 73, height: 73 }}
                            resizeMode='contain'
                            source={imagePath.fashionBag} />
                    </View>
                    <View style={{ height: 68, justifyContent: 'space-between' }} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 210 }} >
                            <Text style={{ fontSize: 16, fontStyle: 'italic' }} >Shopping Bag</Text>
                            <View style={{ width: 62, height: 19, backgroundColor: '#E6E8EB', alignItems: 'center' }} >
                                <Text>Shipped</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 12, fontWeight: 'bold' }} >USD 87.00</Text>
                        <Text style={{ fontSize: 11 }} >Size M | #2</Text>
                    </View>
                </View>
                <View style={{ height: 287, backgroundColor: '#14252A', marginVertical: 25, paddingHorizontal: 20, paddingVertical: 40, justifyContent: 'space-between' }}>
                    <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 20, color: '#fff' }}>Order Details</Text>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={{ color: '#fff', fontSize: 15, fontStyle: 'italic' }} >Promo Code Discount</Text>
                        <Text style={{ color: '#fff', fontSize: 15, }} >312.21 USD</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default OrderNumber;
