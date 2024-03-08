import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import imagePath from '../../../config/imagePath';

const FeaturedItems = ({item}) => {
    return (
        <TouchableOpacity style={{ marginVertical: 24, borderWidth: 1, padding: 15, marginRight: 15, justifyContent: 'space-between' }} >
            <View style={{ alignItems: 'center' }} >
                <Image
                    style={{ height: 121, width: 121 }}
                    source={item.featuredItemImage} />
            </View>
            <View style={{ marginVertical: 10 }} >
                <Text style={{ fontSize: 16, }} >New Arrival</Text>
                <Text style={{ fontSize: 20, fontStyle: 'italic' }} >{item.featuredItemName}</Text>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text style={{ fontSize: 14, fontWeight: 'bold' }} >{item.featuredItemPrice} USD</Text>
                <View style={{ height: 41, width: 41, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ height: 18, width: 18 }}
                        source={imagePath.addtocart} />
                </View>
            </View>
        </TouchableOpacity>
    )
}



export default FeaturedItems;
