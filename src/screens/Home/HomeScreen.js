//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import imagePath from '../../config/imagePath';
import CategoryData from './Data/CategoryData';
import FeaturedItemData from './Data/FeaturedItemData';
import BestSellingItemData from './Data/BestSellingItemData';
import ExploreItemsData from './Data/ExploreItemsData';
import navigationStrings from '../../config/navigationStrings';
import Categories from './Components/Categories';
import BestSellingItems from './Components/BestSellingItems';
import FeaturedItems from './Components/FeaturedItems';
import ExploreItems from './Components/ExploreItems';
import { useSelector } from 'react-redux';
import CartComponent from '../Cart/Component/CartComponent';
import { moderateScale, moderateScaleVertical, textScale } from '../../config';

// create a component
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.mainView}>

                <View style={styles.navbar}>
                    <View style={styles.nav}>
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                            style={styles.drawerButton} >
                            <Image
                                style={{ width: moderateScale(16), height: moderateScale(13) }}
                                resizeMode='contain'
                                source={imagePath.menu} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: textScale(20), fontWeight: 'bold', marginBottom: 3 }}>Hello, </Text>
                            <Text style={{ fontSize: textScale(16), fontWeight: 'bold', color: 'grey' }}>John Doe</Text>
                        </View>
                    </View>

                    <View style={styles.nav}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(navigationStrings.SEARCH)}
                            style={styles.searchButton} >
                            <Image
                                style={{ width: moderateScale(18), height: moderateScale(18) }}
                                resizeMode='contain'
                                source={imagePath.search} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CartStack')}
                            style={{ height: moderateScale(42), width: moderateScale(42), backgroundColor: '#f4f4f4', alignItems: 'center', justifyContent: 'center', borderRadius: moderateScale(21), borderColor: '#ddddde', borderWidth: 1, marginLeft: moderateScale(20) }} >
                            <Image
                                style={{ width: moderateScale(20), height: moderateScale(20) }}
                                resizeMode='contain'
                                source={imagePath.cart} />
                            <View style={{ height: moderateScale(15), width: moderateScale(15), borderRadius: moderateScale(8), backgroundColor: '#14252A', position: 'absolute', top: 0, right: 0, alignItems: 'center', justifyContent: 'center' }}>
                                <CartComponent />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ height: moderateScale(176), backgroundColor: '#14252A', width: '100%', marginVertical: moderateScaleVertical(10), borderRadius: moderateScale(20), justifyContent: 'space-between', flexDirection: 'row', paddingRight: moderateScale(20) }} >
                        <View style={{ justifyContent: 'center', paddingLeft: moderateScale(20), height: moderateScale(176) }} >
                            <View style={{ marginBottom: 5 }} >
                                <Text style={{ color: '#fff', fontSize: textScale(20) }} >You Are</Text>
                                <Text style={{ color: '#fff', fontStyle: 'italic', fontWeight: 'bold', fontSize: textScale(26) }} >SPECIAL</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 9 }} >
                                <Text style={{ color: '#fff', fontSize: textScale(12) }} >Men & Women Fashion  </Text>
                                <Text style={{ color: '#fff', fontSize: textScale(12) }} >4.8  </Text>
                                <Image
                                    style={{ height: moderateScale(12), width: moderateScale(12) }}
                                    source={imagePath.star} />
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("ShopStack")}
                                style={{ height: moderateScale(38), width: moderateScale(111), backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }} >
                                <Text style={{ fontSize: textScale(16) }} >Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                        <Image
                            style={{ height: 176, width: 120 }}
                            source={imagePath.men} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: textScale(20), marginTop: moderateScaleVertical(3) }} >Our</Text>
                            <Text style={{ fontSize: textScale(25), fontWeight: 'bold', color: '#14252A' }} > Category</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("ShopStack")}>
                            <Text style={{ fontSize: textScale(14), textDecorationLine: 'underline' , fontFamily: 'SpaceMono-Regular'}} >View All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        {
                            CategoryData.map((item) => <Categories item={item} />)
                        }
                    </ScrollView>


                    <View style={styles.typeOfList} >
                        <View style={{ flexDirection: 'row', alignItems: 'center'  }}>
                            <Text style={{ fontSize: textScale(20), marginTop: moderateScaleVertical(3) }} >Featured</Text>
                            <Text style={{ fontSize: textScale(25), fontWeight: 'bold', color: '#14252A', fontStyle: 'italic' }} > Items</Text>
                        </View>
                        <TouchableOpacity
                            style={{ height: moderateScale(18) }}
                            onPress={() => navigation.navigate("ShopStack")}>
                            <Text style={{ fontSize: textScale(14), textDecorationLine: 'underline' }} >View All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        {
                            FeaturedItemData.map((item) => <FeaturedItems item={item} />)
                        }
                    </ScrollView>


                    <View style={styles.playVideo} >
                        <View style={{ height: moderateScale(137), backgroundColor: '#727371', borderTopRightRadius: moderateScale(20), borderTopLeftRadius: moderateScale(20) }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: moderateScale(40), paddingHorizontal: moderateScale(20) }} >
                            <Text style={{ color: '#fff', fontStyle: 'italic', fontSize: textScale(20) }} >Look Book 1</Text>
                            <Text style={{ color: '#fff' }} >Play Video →</Text>

                        </View>
                    </View>

                    <View style={styles.typeOfList} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: textScale(20), marginTop: 3 }} >Best Selling</Text>
                            <Text style={{ fontSize: textScale(25), fontWeight: 'bold', color: '#14252A', fontStyle: 'italic' }} > Items</Text>
                        </View>
                        <TouchableOpacity style={{ height: moderateScale(18) }}
                            onPress={() => navigation.navigate("ShopStack")}>
                            <Text style={{ fontSize: textScale(14), textDecorationLine: 'underline' }} >View All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} >
                        {
                            BestSellingItemData.map((item) => <BestSellingItems item={item} />)
                        }
                    </ScrollView>


                    <View style={styles.loyalityCards} >
                        <View>
                            <Text style={{ color: '#fff', fontSize: textScale(16), textAlign: 'center', marginBottom: moderateScale(7), fontWeight: 'bold' }} >Loyality Cards</Text>
                            <Text style={{ color: '#fff' }}   >Don't have your card yet? Apply Today!</Text>
                        </View>
                        <View style={{ marginVertical: moderateScale(15) }} >
                            <Image
                                style={{ height: moderateScale(151), width: moderateScale(268) }}
                                source={imagePath.creditcard} />
                        </View>
                        <TouchableOpacity style={{ height: moderateScale(45), width: moderateScale(248), borderWidth: 0.5, borderColor: '#fff', justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ color: '#fff' }} >Apply Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.typeOfList} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: textScale(20), marginTop: 3 }} >Explore</Text>
                            <Text style={{ fontSize: textScale(25), fontWeight: 'bold', color: '#14252A', fontStyle: 'italic' }} > Items</Text>
                        </View>
                        <TouchableOpacity style={{ height: 18 }}
                            onPress={() => navigation.navigate("ShopStack")}>

                            <Text style={{ fontSize: textScale(14), textDecorationLine: 'underline' }} >View All</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                        {
                            ExploreItemsData.map((item) => <ExploreItems item={item} />)
                        }
                    </ScrollView>


                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: moderateScale(20)
    },

    navbar: {
        marginVertical: moderateScaleVertical(15),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    mainView: {
        flex: 1
    },

    nav: {
        flexDirection: 'row'
    },

    searchButton: {
        height: moderateScale(42),
        width: moderateScale(42),
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(21),
        borderColor: '#ddddde',
        borderWidth: 1
    },

    drawerButton: {
        height: moderateScale(42),
        width: moderateScale(42),
        backgroundColor: '#14252A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(21),
        marginRight: moderateScale(20)
    },

    playVideo: {
        height: moderateScale(178),
        width: '100%',
        backgroundColor: '#14252A',
        marginBottom: moderateScale(20),
        borderRadius: moderateScale(20)
    },


    loyalityCards: {
        width: '100%',
        backgroundColor: '#14252A',
        marginVertical: moderateScaleVertical(20),
        alignItems: 'center',
        padding: moderateScale(20),
        justifyContent: 'space-between'
    },

    typeOfList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }


});

//make this component available to the app
export default HomeScreen;
