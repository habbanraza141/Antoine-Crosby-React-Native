//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';

// create a component
const MyOrders = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                hdrText={'My Orders'}
                container={{ marginBottom: 66, paddingHorizontal: 20 }} />
            <View style={{ height: 1, width: '100%', backgroundColor: '#e2e2e2' }} >

            </View>
            <View style={{ paddingHorizontal: 20 }} >
                <Text style={{ marginVertical: 20, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }}>My Orders</Text>
                <View style={{ height: 108, backgroundColor: '#F4F5F7', width: '100%', padding: 7, flexDirection: 'row' , alignItems: 'center', justifyContent: 'space-between', paddingRight: 15}}>
                    <View style={{ width: 97, height: 94, backgroundColor: '#fff' , alignItems: 'center', justifyContent: 'center'}} >
                        <Image 
                        source={imagePath.fashionBag}
                        style={{height: 74, width: 74}} />
                    </View>
                    <View style={{height: 68, justifyContent: 'space-between'}} >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 210 }} >
                            <Text>Order ID #12345</Text>
                            <View style={{ width: 62, height: 19, backgroundColor: '#E6E8EB', alignItems: 'center' }} >
                                <Text>Shipped</Text>
                            </View>
                        </View>
                        <Text style={{fontSize: 12, fontWeight: 'bold'}} >USD 87.00</Text>
                        <Text style={{fontSize: 11}} >25 October 2023</Text>
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
export default MyOrders;
