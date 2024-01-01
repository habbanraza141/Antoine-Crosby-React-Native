//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagePath from '../../config/imagePath';
import TextInputWithLabel from '../../components/TextInputWithLabel';

// create a component
const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={{ flexDirection: 'row' }} >
                    <Image
                        style={{ height: 18, width: 9 }}
                        source={imagePath.back} />
                    <Text style={{ fontSize: 16 }} >   Search Now</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <TextInputWithLabel
                        inputStyle={{ width: 278 }} />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ height: 42, width: 42, backgroundColor: '#efeeec', borderRadius: 21, borderWidth: 1, borderColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }} >
                        <Image
                            style={{ height: 15.75, width: 16 }}
                            source={imagePath.filter} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                    <Text>Recent Searches</Text>
                    <Text style={{textDecorationLine: 'underline'}} >Clear All</Text>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    mainView: {
        marginTop: 57,
        paddingLeft: 20,
        paddingRight: 20
    }
});

//make this component available to the app
export default Search;
