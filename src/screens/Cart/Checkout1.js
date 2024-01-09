//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import imagePath from '../../config/imagePath';
import BtnComponent from '../../components/ButtonComponent';
import navigationStrings from '../../config/navigationStrings';

// create a component
const Checkout1 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                onPress={()=>navigation.goBack()}
                hdrText={'CheckOut'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74 }} >Shipping Details</Text>
                <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74 , color: '#D0D3D3'}} >Add Address</Text>
                <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74 , color: '#D0D3D3'}} >Payment Details</Text>
                <Text style={{ fontStyle: 'italic', fontWeight: '600', width: 74 , color: '#D0D3D3'}} >Order Summary</Text>
            </View>
            <View style={{ flexDirection: 'row', marginVertical: 15 , alignItems: 'center'}}>
                <View style={{ height: 6, width: '20%', backgroundColor: '#14252A', borderBottomLeftRadius: 8, borderTopLeftRadius: 8 }}>
                </View>
                <View style={{height: 15, width: 15, backgroundColor: '#14252A', borderRadius: 8, justifyContent: 'center', alignItems: 'center'}} >
                <View style={{height: 7, width: 7, backgroundColor: '#D0D3D3', borderRadius: 8,}} >

                </View>
                </View>
                <View style={{ height: 6, width: '80%', backgroundColor: '#D0D3D3', borderBottomRightRadius: 8, borderTopRightRadius: 8 }}>
                </View>
            </View>
            <Text style={{marginVertical: 10, fontStyle: 'italic', fontWeight: '500', fontSize: 20}} >Shipping Details</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInputWithLabel
                inputStyle={{width: 165}}
                    placeholder={'First Name'} />
                <TextInputWithLabel
                inputStyle={{width: 165}}
                    placeholder={'Last Name'} />
                    </View>
                <TextInputWithLabel
                    placeholder={'Enter Email Address'} />
                <TextInputWithLabel
                    placeholder={'Phone Number'} />
                <BtnComponent 
                onPress={()=>navigation.navigate(navigationStrings.CHECKOUT2)}
                btnText={'Submit'}
                btnStyle={{marginVertical: 15}}
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
export default Checkout1;
