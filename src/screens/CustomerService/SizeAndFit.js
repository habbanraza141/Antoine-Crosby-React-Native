//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import SizeData from './SizeData';
import HeaderComponent from '../../components/HeaderComponent';
import imagePath from '../../config/imagePath';

const Categories = ({ item }) => {
    return (
        <TouchableOpacity style={{ height: 50, width: 50, alignItems: 'center', marginVertical: 10, marginRight: 12 }} >
            <View style={{ marginBottom: 10 }} >
                <Image
                    style={{ height: 51, width: 51 }}
                    source={item.categoryImage} />
            </View>
            <Text style={{ fontSize: 10 }} >{item.categoryName}</Text>
        </TouchableOpacity>
    )
}
// create a component
const SizeAndFit = () => {
    return (
        <View style={styles.container}>

            <View style={{ paddingHorizontal: 20 }}>
            <HeaderComponent
                hdrText={'Size And Fit'} />
            <Text style={{ marginBottom: 15, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Size & Fit</Text>


                <FlatList
                    data={SizeData}
                    renderItem={Categories}
                    horizontal={true}
                />

            </View>

            <View style={{ height: 2, width: '100%', backgroundColor: '#e2e2e2', marginVertical: 15 }} >

            </View>
            <ScrollView>

                <View style={{ paddingHorizontal: 20, }} >
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontSize: 20 }} >Size Chart For </Text>
                        <Text style={{ fontStyle: 'italic', fontWeight: '500', fontSize: 20, fontStyle: 'italic' }} >Men</Text>
                    </View>
                    <Text style={{ marginVertical: 20 }} >pellentesque pulvinar pellentesque habitant morbi. In hac habitasse platea pellentesque pulvinar pellentesque habitant morbi. In hac habitasse platea</Text>
                    <View style={{ height: 297, width: '100%', alignItems: 'center', justifyContent: 'center' }} >
                        <Image
                            style={{ width: 261, height: 257 }}
                            source={imagePath.tshirt} />
                    </View>


                    {/* Table Container */}
                    <View style={styles.table}>
                        {/* Table Head */}
                        <View style={styles.table_head}>
                            <View style={{ width: '18%', }}>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_head_captions}>Length</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_head_captions}>Bust</Text>
                            </View>
                            <View style={{ width: '34%', alignItems: 'center' }}>
                                <Text style={styles.table_head_captions}>Shoulders</Text>
                            </View>
                        </View>

                        {/* Table Body - Single Row */}
                        <View style={styles.table_body_first_row}>
                            <View style={{ width: '18%', backgroundColor: '#e1e1e1', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.table_data_left}>S</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>01</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>January</Text>
                            </View>
                            <View style={{ width: '34%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>$10,236</Text>
                            </View>
                        </View>

                        {/* Table Body - Single Row */}
                        <View style={styles.table_body_alternate_row}>
                            <View style={{ width: '18%', backgroundColor: '#e1e1e1', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.table_data_left}>M</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>02</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>February</Text>
                            </View>
                            <View style={{ width: '34%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>$9,236</Text>
                            </View>
                        </View>

                        {/* Table Body - Single Row */}
                        <View style={styles.table_body_first_row}>
                            <View style={{ width: '18%', backgroundColor: '#e1e1e1', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.table_data_left}>L</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>02</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>February</Text>
                            </View>
                            <View style={{ width: '34%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>$9,236</Text>
                            </View>
                        </View>

                        {/* Table Body - Single Row */}
                        <View style={styles.table_body_alternate_row}>
                            <View style={{ width: '18%', backgroundColor: '#e1e1e1', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.table_data_left}>XL</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>02</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>February</Text>
                            </View>
                            <View style={{ width: '34%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>$9,236</Text>
                            </View>
                        </View>

                        {/* Table Body - Single Row */}
                        <View style={styles.table_body_first_row}>
                            <View style={{ width: '18%', backgroundColor: '#e1e1e1', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.table_data_left}>2XL</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>02</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>February</Text>
                            </View>
                            <View style={{ width: '34%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>$9,236</Text>
                            </View>
                        </View>

                        {/* Table Body - Single Row */}
                        <View style={styles.table_body_alternate_row}>
                            <View style={{ width: '18%', backgroundColor: '#e1e1e1', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={styles.table_data_left}>3XL</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>02</Text>
                            </View>
                            <View style={{ width: '24%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>February</Text>
                            </View>
                            <View style={{ width: '34%', alignItems: 'center' }}>
                                <Text style={styles.table_data}>$9,236</Text>
                            </View>
                        </View>



                    </View>
                    <Text style={{ fontSize: 20, marginVertical: 20 }} >Tips </Text>
                    <Text style={{ marginBottom: 20 }} >pellentesque pulvinar pellentesque habitant morbi. In hac habitasse platea pellentesque pulvinar pellentesque habitant morbi. In hac habitasse platea</Text>

                </View>

            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    table_head: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f6f6f6',
        height: 55,
        alignItems: 'center'
    },
    table_head_captions: {
        fontSize: 16,
        fontWeight: '500',
        fontStyle: 'italic'
    },

    table_body_first_row: {
        backgroundColor: '#e9e9e9',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        height: 46,
        alignItems: 'center',
        width: '100%'
    },

    table_body_alternate_row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        height: 46,
        alignItems: 'center',
        width: '100%'
    },

    table_data: {
        fontSize: 16,
        fontStyle: 'italic'

    },
    table_data_left: {
        fontSize: 16,
        fontWeight: '700'

    },
    table: {
        backgroundColor: '#f6f6f6',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
    },
});

//make this component available to the app
export default SizeAndFit;
