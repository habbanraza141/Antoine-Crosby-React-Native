//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';

// create a component
const ChangePassword = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <HeaderComponent
              onPress={()=>navigation.goBack()}
                hdrText={'Change Password'} />
            <Text style={{ marginBottom: 15, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }}>Change Password</Text>
            <TextInputWithLabel
                placeholder={'Current Password'}
                img={imagePath.showed} />
            <TextInputWithLabel
                placeholder={'New Password'}
                img={imagePath.showed} />

            <TextInputWithLabel
                placeholder={'Confirm New Password'}
                img={imagePath.showed} />

            <BtnComponent
                onPress={() => navigation.goBack()}
                btnText={'Save'}
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
export default ChangePassword;
