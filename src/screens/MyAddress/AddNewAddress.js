//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';

// create a component
const AddNewAddress = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                hdrText={'Add New Address'} />
            <Text style={{ marginBottom: 15, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }}>Add New Address</Text>
            
            <TextInputWithLabel
                placeholder={'Address Line'} />
            <TextInputWithLabel
                placeholder={'Suite, Appartment'}/>

            <View style={{ flexDirection: 'row' , justifyContent: 'space-between'}} >
                <TextInputWithLabel
                    placeholder={'City'}
                    inputStyle={{width: 158}} />

                <TextInputWithLabel
                    placeholder={'State'}
                    inputStyle={{width: 158}} />
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <TextInputWithLabel
                    placeholder={'Country'}
                    inputStyle={{width: 158}} />

                <TextInputWithLabel
                    placeholder={'Zip Code'}
                    inputStyle={{width: 158}} />
            </View>


            <BtnComponent
                btnText={'Save Address'}
                img={imagePath.btnForward}
                btnStyle={{ marginVertical: 15 }} />
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
export default AddNewAddress;
