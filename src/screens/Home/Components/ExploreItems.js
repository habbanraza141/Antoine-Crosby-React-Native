import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import imagePath from '../../../config/imagePath';
import { textScale } from '../../../config';

const ExploreItems = ({ item }) => {
    return (
        <TouchableOpacity style={{ marginVertical: 24, borderWidth: 1, padding: 15, marginRight: 15, justifyContent: 'space-between' }} >
            <View style={{ alignItems: 'center' }} >
                <Image
                    style={{ height: 121, width: 121 }}
                    source={item.exploreItemImage} />
            </View>
            <View style={{ marginVertical: 10 }} >
                <Text style={{ fontSize: textScale(16), }} >New Arrival</Text>
                <Text style={{ fontSize: textScale(20), fontStyle: 'italic' }} >{item.exploreItemName}</Text>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text style={{ fontSize: textScale(14), fontWeight: 'bold' }} >{item.exploreItemPrice} USD</Text>
                <View style={{ height: 41, width: 41, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ height: 18, width: 18 }}
                        source={imagePath.addtocart} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ExploreItems;
