//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagePath from '../../../config/imagePath';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../../redux/action';
import { textScale } from '../../../config';

// create a component
const BestSellingItems = (props) => {
    const item = props.item
    const [isTrue, setTrue] = useState(false)
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.reducer)
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name));
    }
    useEffect(() => {
        let result = cartItems.filter((element) => {
            return element.name === item.name
        });
        if (result.length) {
            setIsAdded(true)
        } else {
            setIsAdded(false)
        }
    }, [cartItems])
    return (
        <View style={{ height: 180, width: '100%', marginVertical: 10, borderWidth: 0.5, padding: 20, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f8f8f8' }} >
            <Image
                style={{ height: 143, width: 143 }}
                source={item.image} />
            <View style={{ justifyContent: 'space-between', width: '55%' }} >
                <View>
                    <Text style={{ fontSize: textScale(16), }} >New Arrival</Text>
                    <Text style={{ fontSize: textScale(20), fontStyle: 'italic' }} >{item.name}</Text>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    <Text style={{ fontSize: textScale(14), fontWeight: 'bold' }} >${item.newPrice} </Text>
                    <Text style={{ fontSize: textScale(14), fontWeight: 'bold', textDecorationLine: 'line-through', color: 'grey' }} >${item.oldPrice}</Text>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    {
                        isAdded ?
                            <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={{ height: 41, width: 109, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 7, paddingRight: 7, marginRight: 10 }}>
                                <Text style={{ color: '#ffffff', fontSize: textScale(12) }} >Remove From </Text>
                                <Image
                                    style={{ height: 18, width: 18 }}
                                    source={imagePath.addtocart} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => handleAddToCart(item)} style={{ height: 41, width: 109, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 7, paddingRight: 7, marginRight: 10 }}>
                                <Text style={{ color: '#ffffff', fontSize: textScale(12) }} >Add To Cart</Text>
                                <Image
                                    style={{ height: 18, width: 18 }}
                                    source={imagePath.addtocart} />
                            </TouchableOpacity>

                    }
                    <TouchableOpacity
                        onPress={() => setTrue(!isTrue)}
                        style={{ height: 41, width: 41, borderRadius: 20.5, backgroundColor: '#e2e2e2', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ height: 16, width: 19 }}
                            source={isTrue ? imagePath.favouriteFilled : imagePath.favouriteEmpty} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default BestSellingItems;
