//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import navigationStrings from '../../config/navigationStrings';

// create a component
const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/splash.jpg')}
                style={{ height: '65%', width: '100%' }} />
            <View style={styles.bottomView}>
                <View>
                    <Text style={{ fontSize: 28, fontStyle: 'italic', textAlign: 'center', marginTop: 30 }} >Welcome To</Text>
                    <Text style={{ fontSize: 28, fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold' }}>Antoine Crosby</Text>
                </View>
                <Text style={{ fontSize: 14, textAlign: 'center', marginVertical: 20, paddingLeft: 30, paddingRight: 30 }}>Antoine Crosby was founded in 2022 with one simple rule affordability exposure.</Text>
                <BtnComponent
                onPress={()=>navigation.navigate(navigationStrings.LOGIN_ACCOUNT)}
                    btnText={'Get started'}
                    img={imagePath.btnForward}
                    btnStyle={{ marginBottom: 90, width: '100%' }} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEEEC',
    },

    bottomView: {
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }

});

//make this component available to the app
export default Splash;
