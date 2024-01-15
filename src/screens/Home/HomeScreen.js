//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import imagePath from '../../config/imagePath';
import CategoryData from './CategoryData';
import FeaturedItemData from './FeaturedItemData';
import BestSellingItemData from './BestSellingItemData';
import ExploreItemsData from './ExploreItemsData';
import navigationStrings from '../../config/navigationStrings';


const Categories = ({ item }) => {
    return (
        <TouchableOpacity style={{ height: 74, width: 79, alignItems: 'center', marginVertical: 24 , marginRight: 5}} >
            <View style={{ marginBottom: 10 }} >
                <Image
                    style={{ height: 51, width: 51 }}
                    source={item.categoryImage} />
            </View>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }} >{item.categoryName}</Text>
        </TouchableOpacity>
    )
}
const FeaturedItems = ({ item }) => {
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
const ExploreItems = ({ item }) => {
    return (
        <TouchableOpacity style={{ marginVertical: 24, borderWidth: 1, padding: 15, marginRight: 15, justifyContent: 'space-between' }} >
            <View style={{ alignItems: 'center' }} >
                <Image
                    style={{ height: 121, width: 121 }}
                    source={item.exploreItemImage} />
            </View>
            <View style={{ marginVertical: 10 }} >
                <Text style={{ fontSize: 16, }} >New Arrival</Text>
                <Text style={{ fontSize: 20, fontStyle: 'italic' }} >{item.exploreItemName}</Text>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text style={{ fontSize: 14, fontWeight: 'bold' }} >{item.exploreItemPrice} USD</Text>
                <View style={{ height: 41, width: 41, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        style={{ height: 18, width: 18 }}
                        source={imagePath.addtocart} />
                </View>
            </View>
        </TouchableOpacity>
    )
}


// create a component
const HomeScreen = ({ navigation }) => {
    const [isTrue, setTrue] = useState(false)
    const BestSellingItems = ({ item }) => {
        return (
            <View style={{ height: 180, width: '100%', marginVertical: 10, borderWidth: 0.5, padding: 20, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f8f8f8' }} >
                <Image
                    style={{ height: 143, width: 143 }}
                    source={item.bestSellingItemImage} />
                <View style={{ justifyContent: 'space-between', width: '55%' }} >
                    <View>
                        <Text style={{ fontSize: 16, }} >New Arrival</Text>
                        <Text style={{ fontSize: 20, fontStyle: 'italic' }} >{item.bestSellingItemName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }} >${item.bestSellingItemNewPrice} </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', textDecorationLine: 'line-through', color: 'grey' }} >${item.bestSellingItemOldPrice}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <TouchableOpacity style={{ height: 41, width: 109, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 7, paddingRight: 7, marginRight: 10 }}>
                            <Text style={{ color: '#ffffff', fontSize: 12 }} >Add To Cart</Text>
                            <Image
                                style={{ height: 18, width: 18 }}
                                source={imagePath.addtocart} />
                        </TouchableOpacity>
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
    return (
        <View style={styles.container}>

            <SafeAreaView style={styles.mainView}>

                <View style={styles.navbar}>
                    <View style={styles.nav}>
                        <TouchableOpacity
                            onPress={() => navigation.openDrawer()}
                            style={{ height: 42, width: 42, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'center', borderRadius: 21, marginRight: 20 }} >
                            <Image
                                style={{ width: 16, height: 13 }}
                                resizeMode='contain'
                                source={imagePath.menu} />
                        </TouchableOpacity>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 3 }}>Hello, </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}>John Doe</Text>
                        </View>
                    </View>

                    <View style={styles.nav}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(navigationStrings.SEARCH)}
                            style={{ height: 42, width: 42, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', borderRadius: 21, borderColor: '#ddddde', borderWidth: 1 }} >
                            <Image
                                style={{ width: 18, height: 18 }}
                                resizeMode='contain'
                                source={imagePath.search} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('CartStack')}
                            style={{ height: 42, width: 42, backgroundColor: '#f4f4f4', alignItems: 'center', justifyContent: 'center', borderRadius: 21, borderColor: '#ddddde', borderWidth: 1, marginLeft: 20 }} >
                            <Image
                                style={{ width: 24, height: 24 }}
                                resizeMode='contain'
                                source={imagePath.cart} />
                        </TouchableOpacity>
                    </View>

                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ height: 176, backgroundColor: '#14252A', width: '100%', marginVertical: 25, borderRadius: 20, justifyContent: 'space-between', flexDirection: 'row', paddingRight: 20 }} >
                        <View style={{ justifyContent: 'center', paddingLeft: 20, height: 176 }} >
                            <View style={{ marginBottom: 5 }} >
                                <Text style={{ color: '#fff', fontSize: 20 }} >You Are</Text>
                                <Text style={{ color: '#fff', fontStyle: 'italic', fontWeight: 'bold', fontSize: 26 }} >SPECIAL</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 9 }} >
                                <Text style={{ color: '#fff', fontSize: 12 }} >Men & Women Fashion  </Text>
                                <Text style={{ color: '#fff', fontSize: 12 }} >4.8  </Text>
                                <Image
                                    style={{ height: 12, width: 12 }}
                                    source={imagePath.star} />
                            </View>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("ShopStack")}
                                style={{ height: 38, width: 111, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }} >
                                <Text style={{ fontSize: 16 }} >Shop Now</Text>
                            </TouchableOpacity>
                        </View>
                        <Image
                            style={{ height: 176, width: 120 }}
                            source={imagePath.men} />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 3 }} >Our</Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#14252A' }} > Category</Text>
                        </View>
                        <TouchableOpacity >
                            <Text style={{ fontSize: 14, textDecorationLine: 'underline' }} >View All</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={CategoryData}
                        renderItem={Categories}
                        horizontal={true}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 3 }} >Featured</Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#14252A', fontStyle: 'italic' }} > Items</Text>
                        </View>
                        <TouchableOpacity style={{ height: 18 }} >
                            <Text style={{ fontSize: 14, textDecorationLine: 'underline' }} >View All</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={FeaturedItemData}
                        renderItem={FeaturedItems}
                        horizontal={true}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}

                    />

                    <View style={{ height: 178, width: '100%', backgroundColor: '#14252A', marginBottom: 20, borderRadius: 20, }} >
                        <View style={{ height: 137, backgroundColor: '#727371', borderTopRightRadius: 20, borderTopLeftRadius: 20 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, paddingHorizontal: 20 }} >
                            <Text style={{ color: '#fff', fontStyle: 'italic', fontSize: 20 }} >Look Book 1</Text>
                            <Text style={{ color: '#fff' }} >Play Video →</Text>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 3 }} >Best Selling</Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#14252A', fontStyle: 'italic' }} > Items</Text>
                        </View>
                        <TouchableOpacity style={{ height: 18 }} >
                            <Text style={{ fontSize: 14, textDecorationLine: 'underline' }} >View All</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={BestSellingItemData}
                        renderItem={BestSellingItems}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}

                    />

                    <View style={{ width: '100%', backgroundColor: '#14252A', marginVertical: 20, alignItems: 'center', padding: 20, justifyContent: 'space-between' }} >
                        <View>
                            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', marginBottom: 7, fontWeight: 'bold' }} >Loyality Cards</Text>
                            <Text style={{ color: '#fff' }}   >Don't have your card yet? Apply Today!</Text>
                        </View>
                        <View style={{marginVertical: 15}} >
                            <Image
                                style={{ height: 151, width: 268 }}
                                source={imagePath.creditcard} />
                        </View>
                        <TouchableOpacity style={{ height: 45, width: 248, borderWidth: 0.5, borderColor: '#fff', justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ color: '#fff' }} >Apply Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 3 }} >Explore</Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#14252A', fontStyle: 'italic' }} > Items</Text>
                        </View>
                        <TouchableOpacity style={{ height: 18 }} >
                            <Text style={{ fontSize: 14, textDecorationLine: 'underline' }} >View All</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={ExploreItemsData}
                        renderItem={ExploreItems}
                        horizontal={true}
                    />


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
        paddingHorizontal: 20
    },

    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    mainView: {
        flex: 1
    },

    nav: {
        flexDirection: 'row'
    }
});

//make this component available to the app
export default HomeScreen;
