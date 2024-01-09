//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import navigationStrings from '../../config/navigationStrings';

// create a component
const ForgetPassword = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.midView}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 26 }}>Forget </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 26, fontStyle: 'italic' }}>Password</Text>
            </View>
            <Text style={{ fontSize: 14, marginVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Text>
           
            <TextInputWithLabel 
            placeholder={'Enter Email Address'}/>
            <BtnComponent
                        onPress={()=>navigation.navigate(navigationStrings.OTP_CODE)}

                btnStyle={{ marginTop: 20 , marginBottom: 20}}
                btnText={'Submit'}
                img={imagePath.btnForward} />

        </View>
    </View>
);
};

// define your styles
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#ffffff',
},

midView: {
    marginTop: 115,
    paddingLeft: 20,
    paddingRight: 20
}
});

//make this component available to the app
export default ForgetPassword;
