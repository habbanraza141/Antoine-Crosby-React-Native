//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';

// create a component
const FoodList = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <HeaderComponent
                onPress={()=>navigation.goBack()}
                    hdrText={'List'} />
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
});

//make this component available to the app
export default FoodList;
