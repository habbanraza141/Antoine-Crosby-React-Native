//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import navigationStrings from '../../config/navigationStrings';

// create a component
const NewPassword = ({navigation}) => {
    return (
        <View style={styles.container}>
        <View style={styles.midView}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 26 }}>New </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 26, fontStyle: 'italic' }}>Password</Text>
            </View>
            <Text style={{ fontSize: 14, marginVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Text>
           
            <TextInputWithLabel 
            placeholder={'Enter New Password'}/>
           
            <TextInputWithLabel 
            placeholder={'Confirm New Password'}/>
            <BtnComponent
                        onPress={()=>navigation.navigate(navigationStrings.LOGIN_ACCOUNT)}

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
export default NewPassword;
