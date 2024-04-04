//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import navigationStrings from '../../config/navigationStrings';
import { textScale } from '../../config';

// create a component
const EditAddress = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderComponent
            onPress={()=>navigation.goBack()}
                hdrText={'Edit Address'} />
            <Text style={{ marginBottom: 15, fontStyle: 'italic', fontWeight: '500', fontSize: textScale(20) }}>Edit Address</Text>
            
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
                onPress={()=>navigation.navigate(navigationStrings.MY_ADDRESS)}
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
export default EditAddress;
