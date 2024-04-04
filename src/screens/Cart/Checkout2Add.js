//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import { textScale } from '../../config';
// create a component
const Checkout2Add = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>

            <HeaderComponent
                onPress={()=>navigation.goBack()}
                hdrText={'CheckOut'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74 }} >Shipping Details</Text>
                <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74 }} >Add Address</Text>
                <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74, color: '#D0D3D3' }} >Payment Details</Text>
                <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74, color: '#D0D3D3' }} >Order Summary</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 15, alignItems: 'center' }}>
                <View style={{ height: 6, width: '45%', backgroundColor: '#14252A', borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }}>
                </View>
                <View style={{ height: 15, width: 15, backgroundColor: '#14252A', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ height: 7, width: 7, backgroundColor: '#D0D3D3', borderRadius: 8, }} >

                    </View>
                </View>
                <View style={{ height: 6, width: '55%', backgroundColor: '#D0D3D3', borderBottomRightRadius: 8, borderTopRightRadius: 8 }}>
                </View>
            </View>
            <Text style={{ marginVertical: 10, fontStyle: 'italic', fontWeight: '500', fontSize: textScale(20) }} >Add Address</Text>
                <TextInputWithLabel
                    placeholder={'Address Line'} />
                <TextInputWithLabel
                    placeholder={'Suite, Appartment'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInputWithLabel
                    inputStyle={{ width: 165 }}
                    placeholder={'City'} />
                <TextInputWithLabel
                    inputStyle={{ width: 165 }}
                    placeholder={'State'} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInputWithLabel
                    inputStyle={{ width: 165 }}
                    placeholder={'Country'} />
                <TextInputWithLabel
                    inputStyle={{ width: 165 }}
                    placeholder={'Zip Code'} />
            </View>
            <BtnComponent
                btnText={'Submit'}
                btnStyle={{ marginVertical: 15 }}
                img={imagePath.btnForward} />
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
export default Checkout2Add;
