//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import imagePath from '../../config/imagePath';
import CategoryData from './CategoryData';
import FeaturedItemData from './FeaturedItemData';
import BestSellingItemData from './BestSellingItemData';
import ExploreItemsData from './ExploreItemsData';

const Categories = ({ item }) => {
    return (
        <TouchableOpacity style={{ height: 74, width: 79, alignItems: 'center', marginVertical: 24 }} >
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
        <TouchableOpacity style={{ height: 230, width: 156, marginVertical: 24, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginRight: 12, paddingBottom: 10, justifyContent: 'space-between' }} >
            <Image
                style={{ height: 121, width: 121 }}
                source={item.featuredItemImage} />
            <View  >
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
        <TouchableOpacity style={{ height: 230, width: 156, marginVertical: 24, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginRight: 12, paddingBottom: 10, justifyContent: 'space-between' }} >
            <Image
                style={{ height: 121, width: 121 }}
                source={item.exploreItemImage} />
            <View  >
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
const Home = () => {
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
            <View style={styles.mainView}>
                <View style={styles.navbar}>
                    <View style={styles.nav}>
                        <View style={{ height: 42, width: 42, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'center', borderRadius: 21, marginRight: 20 }} >
                            <Image
                                style={{ width: 16, height: 13 }}
                                resizeMode='contain'
                                source={imagePath.menu} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 3 }}>Hello, </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'grey' }}>John Doe</Text>
                        </View>
                    </View>
                    <View style={styles.nav}>
                        <View style={{ height: 42, width: 42, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center', borderRadius: 21, borderColor: '#ddddde', borderWidth: 1 }} >
                            <Image
                                style={{ width: 18, height: 18 }}
                                resizeMode='contain'
                                source={imagePath.search} />
                        </View>
                        <View style={{ height: 42, width: 42, backgroundColor: '#f4f4f4', alignItems: 'center', justifyContent: 'center', borderRadius: 21, borderColor: '#ddddde', borderWidth: 1, marginLeft: 20 }} >
                            <Image
                                style={{ width: 24, height: 24 }}
                                resizeMode='contain'
                                source={imagePath.cart} />
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ height: 176, backgroundColor: '#14252A', width: '100%', marginVertical: 34, borderRadius: 20, justifyContent: 'space-between', flexDirection: 'row', paddingRight: 20 }} >
                        <View style={{ justifyContent: 'space-between', paddingTop: 20, paddingLeft: 20, paddingBottom: 20, height: 176 }} >
                            <View>
                                <Text style={{ color: '#fff', fontSize: 20 }} >You Are</Text>
                                <Text style={{ color: '#fff', fontStyle: 'italic', fontWeight: 'bold', fontSize: 26 }} >SPECIAL</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }} >
                                <Text style={{ color: '#fff', fontSize: 12 }} >Men & Women Fashion  </Text>
                                <Text style={{ color: '#fff', fontSize: 12 }} >4.8  </Text>
                                <Image
                                    style={{ height: 12, width: 12 }}
                                    source={imagePath.star} />
                            </View>
                            <View style={{ height: 38, width: 111, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }} >
                                <Text style={{ fontSize: 16 }} >Shop Now</Text>
                            </View>
                        </View>
                        <Image
                            style={{ height: 176, width: 120 }}
                            source={imagePath.men} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 3 }} >Our</Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#14252A' }} > Category</Text>
                        </View>
                        <Text style={{ fontSize: 14, marginTop: 9 }} >View All</Text>
                    </View>
                    <FlatList
                        data={CategoryData}
                        renderItem={Categories}
                        horizontal={true}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 3 }} >Featured</Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#14252A', fontStyle: 'italic' }} > Items</Text>
                        </View>
                        <Text style={{ fontSize: 14, marginTop: 9 }} >View All</Text>
                    </View>

                    <FlatList
                        data={FeaturedItemData}
                        renderItem={FeaturedItems}
                        horizontal={true}
                    />

                    <View style={{ height: 178, width: '100%', backgroundColor: '#14252A', borderRadius: 20, marginBottom: 20 }} >
                        <Image
                            style={{ height: 138, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                            source={imagePath.men2} />
                        <View style={{ flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center',  height: 40, paddingHorizontal: 20}} >
                            <Text style={{ color: '#fff', fontStyle: 'italic', fontSize: 20 }} >Look Book 1</Text>
                            <Text style={{ color: '#fff' }} >Play Video →</Text>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 3 }} >Best</Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#14252A', fontStyle: 'italic' }} > Selling Items</Text>
                        </View>
                        <Text style={{ fontSize: 14, marginTop: 9 }} >View All</Text>
                    </View>

                    <FlatList
                        data={BestSellingItemData}
                        renderItem={BestSellingItems}
                    />

                    <View style={{ height: 297, width: '100%', backgroundColor: '#14252A', marginVertical: 20, alignItems: 'center', paddingTop: 15, paddingBottom: 10, justifyContent: 'space-between' }} >
                        <View>
                            <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', marginBottom: 7, fontWeight: 'bold' }} >Loyality Cards</Text>
                            <Text style={{ color: '#fff' }}   >Don't have your card yet? Apply Today!</Text>
                        </View>
                        <Image
                            style={{ height: 151, width: 268 }}
                            source={imagePath.creditcard} />
                        <TouchableOpacity style={{ height: 45, width: 248, borderWidth: 0.5, borderColor: '#fff', justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={{ color: '#fff' }} >Apply Now</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, marginTop: 3 }} >Explore</Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#14252A', fontStyle: 'italic' }} > Items</Text>
                        </View>
                        <Text style={{ fontSize: 14, marginTop: 9 }} >View All</Text>
                    </View>

                    <FlatList
                        data={ExploreItemsData}
                        renderItem={ExploreItems}
                        horizontal={true}
                    />


                </ScrollView>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    navbar: {
        marginTop: 58,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    mainView: {
        paddingLeft: 20,
        paddingRight: 20
    },

    nav: {
        flexDirection: 'row'
    }
});

//make this component available to the app
export default Home;
