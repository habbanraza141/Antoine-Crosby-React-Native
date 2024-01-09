//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import navigationStrings from '../../config/navigationStrings';

// create a component
const OtpCode = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.midView}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 26 }}>OTP </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 26, fontStyle: 'italic' }}>Code</Text>
            </View>
            <Text style={{ fontSize: 14, marginVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Text>
           

            <BtnComponent
                        onPress={()=>navigation.navigate(navigationStrings.NEW_PASSWORD)}

                btnStyle={{ marginVertical: 27 }}
                btnText={'Submit'}
                img={imagePath.btnForward} />

            <View style={{ justifyContent: 'center', marginVertical: 8, flexDirection: 'row' }}>
                <Text style={{ fontSize: 14, fontStyle: 'italic', textDecorationLine: 'underline', textAlign: 'center' }}>Resend Code</Text>
            </View>
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
export default OtpCode;
