//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import HeaderComponent from '../../components/HeaderComponent';

// create a component
const ReportProblem = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                hdrText={'Report A Problem'} />
                <Text style={{ marginVertical: 15, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Report A Problem</Text>
 
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInputWithLabel
                    inputStyle={{ width: 157 }}
                    placeholder={'First Name'} />
                <TextInputWithLabel
                    inputStyle={{ width: 157 }}
                    placeholder={'Last Name'} />
            </View>
            <TextInputWithLabel
                placeholder={'Enter Email Address'} />
            <TextInputWithLabel
                placeholder={'Contact Number'} />
            <TextInputWithLabel
                placeholder={'Attach Files'} 
                img={require('../../assets/icons/attach.png')}/>
            <TextInputWithLabel 
                placeholder={'Message'}
                inputStyle={{height: 105, alignItems: 'flex-start', paddingTop: 20}} />
      


            <BtnComponent
                btnStyle={{ marginVertical: 20}}
                btnText={'Apply Now'}
                img={imagePath.btnForward} />
           
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
})
//make this component available to the app
export default ReportProblem;
