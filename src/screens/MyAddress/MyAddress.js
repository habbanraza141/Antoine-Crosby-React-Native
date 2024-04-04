//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import navigationStrings from '../../config/navigationStrings';

const Address = [
    {
        id: 1,
        placeName: 'OFFICE',
        placeAddress: '4806 Fittro Street hughes ,Victoria Street Morton Grove',
        city: 'Ottawa, IL 61350'
    },
    {
        id: 2,
        placeName: 'HOME',
        placeAddress: '4806 Fittro Street hughes ,Victoria Street Morton Grove',
        city: 'Ottawa, IL 61350'
    },
    {
        id: 3,
        placeName: 'OFFICE',
        placeAddress: '4806 Fittro Street hughes ,Victoria Street Morton Grove',
        city: 'Ottawa, IL 61350'
    },
    {
        id: 4,
        placeName: 'HOME',
        placeAddress: '4806 Fittro Street hughes ,Victoria Street Morton Grove',
        city: 'Ottawa, IL 61350'
    },
    {
        id: 5,
        placeName: 'OFFICE',
        placeAddress: '4806 Fittro Street hughes ,Victoria Street Morton Grove',
        city: 'Ottawa, IL 61350'
    },
]

// create a component
const MyAddress = ({ navigation }) => {
    const oneAddress = ({ item }) => {
        return (
            <View style={{ height: 182, width: '100%', borderWidth: 1, borderColor: '#14252A', padding: 20, marginVertical: 10 }} >

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: 115, justifyContent: 'space-between' }} >
                        <View style={{ backgroundColor: '#14252A', height: 38, width: 37, borderRadius: 19, alignItems: 'center', justifyContent: 'center' }} >
                            <Image
                                style={{ width: 19, height: 18 }}
                                source={imagePath.home2} />
                        </View>
                        <Text style={{ fontSize: textScale(20), fontWeight: 'bold' }} >{item.placeName}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: 45, justifyContent: 'space-between' }} >
                        <TouchableOpacity>
                            <Image
                                style={{ width: 15, height: 15 }}
                                source={imagePath.delete} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(navigationStrings.EDIT_ADDRESS)}>
                            <Image
                                style={{ width: 15, height: 15 }}
                                source={imagePath.edit2} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ marginVertical: 15 }} >{item.placeAddress}</Text>
                <Text>{item.city}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.mainView} >
                <HeaderComponent
                    hdrText={'My Address'}
                    onPress={() => navigation.goBack()} />
                <Text style={{ marginBottom: 20, fontStyle: 'italic', fontWeight: '500', fontSize: textScale(20) }}>Saved Address</Text>
                <View>

                    <FlatList
                        data={Address}
                        renderItem={oneAddress}
                        keyExtractor={item => item.id}
                    />
                </View>
                <BtnComponent
                    btnText={'Add New Address'}
                    btnStyle={{ marginVertical: 10 }}
                    img={imagePath.btnForward}
                    onPress={() => navigation.navigate(navigationStrings.ADD_NEW_ADDRESS)} />

            </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    mainView:{
        paddingHorizontal: 20,
        flex: 1
    }
});

//make this component available to the app
export default MyAddress;
