//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import imagePath from '../../config/imagePath';
import HeaderComponent from '../../components/HeaderComponent';


// create a component
const MyWishlist = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <HeaderComponent
                    onPress={() => navigation.goBack()}
                    hdrText={'Wishlist'} />
                <View style={{ height: 108, backgroundColor: '#F4F5F7', width: '100%', padding: 7, flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
                    <TouchableOpacity style={{ padding: 5, position: 'absolute', right: 8, top: 8 }}>
                        <Image
                            style={{ height: 9, width: 9 }}
                            source={imagePath.cross} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 31, width: 31, borderRadius: 4, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 8, bottom: 8 }}>
                        <Image
                            style={{ height: 18, width: 18 }}
                            source={imagePath.addtocart} />
                    </TouchableOpacity>
                    <View style={{ width: 97, height: 94, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }} >
                        <Image
                            source={imagePath.fashionBag}
                            style={{ height: 74, width: 74 }} />
                    </View>
                    <View style={{ height: 68, justifyContent: 'space-between', marginLeft: 15 }} >
                        <Text style={{ fontSize: textScale(16) }} >Shopping Bag</Text>
                        <Text style={{ fontSize: textScale(12), fontWeight: 'bold' }} >USD 87.00</Text>
                        <View style={{ width: 62, height: 19, justifyContent: 'center', backgroundColor: '#E6E8EB', alignItems: 'center' }} >
                            <Text style={{ fontSize: textScale(10) }} >In Stock</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20
    },
});

//make this component available to the app
export default MyWishlist;
