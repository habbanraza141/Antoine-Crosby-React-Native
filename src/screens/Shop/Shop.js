//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import imagePath from '../../config/imagePath';
import ShopData from './ShopData';

const ShopItems = ({ item }) => {
    return (
        <TouchableOpacity style={{ height: 230, width: 156, marginVertical: 10, borderWidth: 1, borderColor: '#e2e2e2',paddingLeft: 10, paddingRight: 10, marginRight: 20, paddingBottom: 10, justifyContent: 'space-between' }} >
            <Image
                style={{ height: 121, width: 121 }}
                source={item.shopItemImage} />
            <View  >
                <Text style={{ fontSize: 16, }} >New Arrival</Text>
                <Text style={{ fontSize: 20, fontStyle: 'italic' }} >{item.shopItemName}</Text>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text style={{ fontSize: 14, fontWeight: 'bold' }} >{item.shopItemPrice} USD</Text>
                <View style={{ height: 41, width: 41, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ height: 18, width: 18 }}
                        source={imagePath.addtocart} />
                </View>
            </View>
        </TouchableOpacity>
    )
}
const ShopScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <View style={{ flexDirection: 'row' }} >
                    <Image
                        style={{ height: 18, width: 9 }}
                        source={imagePath.back} />
                    <Text style={{ fontSize: 16 }} >   Shop</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' , marginVertical: 10}} >
                    <TextInputWithLabel
                    placeholder={'Search by Name'}
                        inputStyle={{ width: 278, height: 42 }} />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ height: 42, width: 42, backgroundColor: '#efeeec', borderRadius: 21, borderWidth: 1, borderColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }} >
                        <Image
                            style={{ height: 15.75, width: 16 }}
                            source={imagePath.filter} />
                    </TouchableOpacity>
                </View>
            
                <TouchableOpacity 
                activeOpacity={0.6}
                style={{height: 42, width: '100%', borderWidth: 1, borderColor: '#7C7C7C', flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20, alignItems: 'center', marginBottom: 10}} >
                    <Text style={{color: '#7c7c7c'}} >Sort By Name</Text>
                    <Image 
                    style={{height: 7.66, width: 14}}
                    source={imagePath.dropdown}    />
                </TouchableOpacity>

                <FlatList 
                data={ShopData}
                renderItem={ShopItems}
                numColumns={2} />

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
export default ShopScreen;
