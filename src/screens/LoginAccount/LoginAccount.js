//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import HeaderComponent from '../../components/HeaderComponent';
import navigationStrings from '../../config/navigationStrings';
import TabRoutes from '../../navigation/TabRoutes';
import { moderateScale, moderateScaleVertical, textScale } from '../../config';
// create a component
const LoginAccount = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.midView}>
                <Text style={{ fontWeight: 'bold', fontSize: textScale(16) }}>Welcome Back</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: textScale(26) }}>Login Your </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: textScale(26), fontStyle: 'italic' }}>Account</Text>
                </View>
                <Text style={{ fontSize: textScale(14), marginVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Text>
                <TextInputWithLabel
                    placeholder={'Enter Email Address'} />
                <TextInputWithLabel
                    placeholder={'Password'} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
                    <Text style={{ fontSize: textScale(14) }}>Remember Me</Text>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate(navigationStrings.FORGET_PASSWORD)}>
                    <Text style={{ fontSize: textScale(14) }}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <BtnComponent
                    onPress={()=>navigation.navigate('DrawerStack')}
                    btnStyle={{ marginVertical: 27 }}
                    btnText={'Login Now'}
                    img={imagePath.btnForward} />

                <View style={{ justifyContent: 'center', marginVertical: 8, flexDirection: 'row' }}>
                    <Text style={{ fontSize: textScale(14) }}>Don't have a account? </Text>
                    <TouchableOpacity
                    
                    onPress={()=>navigation.navigate(navigationStrings.CREATE_ACCOUNT)}>

                    <Text style={{ fontSize: textScale(14), fontStyle: 'italic', textDecorationLine: 'underline' }}>Sign Up</Text>
                    </TouchableOpacity>
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
        marginTop: moderateScaleVertical(90),
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20)
    }
});

//make this component available to the app
export default LoginAccount;
