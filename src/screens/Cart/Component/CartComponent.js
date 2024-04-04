import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { textScale } from '../../../config';


const CartComponent = () => {
    const cartData = useSelector((state) => state.reducer)
    const [cartItems, setCartItems] = useState(0)
    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])
    return (
        <View>
            <Text style={{ color: '#fff', fontSize: textScale(9), fontWeight: 'bold', textAlign: 'center' }} >{cartItems} </Text>
        </View>
    )
}

export default CartComponent