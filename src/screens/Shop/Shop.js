//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import imagePath from '../../config/imagePath';
import ShopData from './ShopData';
import navigationStrings from '../../config/navigationStrings';
import HeaderComponent from '../../components/HeaderComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

const ShopScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const ShopItems = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(navigationStrings.SHOP_DETAILED)}
                style={{ height: 230, width: 156, marginVertical: 10, borderWidth: 1, borderColor: '#e2e2e2', paddingLeft: 10, paddingRight: 10, marginRight: 20, paddingBottom: 10, justifyContent: 'space-between' }} >
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
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>
                <HeaderComponent
                    onPress={() => navigation.goBack()}
                    hdrText={"Shop"} />

                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.modalView2}>
                        <View style={{ flexDirection: 'row', marginTop: 40, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, }} >
                            <Text style={styles.modalText2}>Filter</Text>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Image
                                    style={{ height: 10, width: 10, tintColor: '#fff' }}
                                    source={imagePath.cross} />
                            </Pressable>
                        </View>

                        <View style={{ paddingHorizontal: 20 , borderTopWidth: 1, borderColor: '#fff', paddingVertical: 15, marginTop: 17}} >
                            <Text style={{ color: '#fff', fontSize: 16 }} >Price</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                                <Text style={{ color: '#fff', fontSize: 16 }} >$10</Text>
                                <Text style={{ color: '#fff', fontSize: 16 }} >$10</Text>
                            </View>
                        </View>

                        <View style={{ paddingHorizontal: 20 , borderTopWidth: 1, borderColor: '#fff', paddingVertical: 15, }} >
                            <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >Price</Text>
                        </View>
                        <View style={{ paddingHorizontal: 20 , borderTopWidth: 1, borderColor: '#fff', paddingVertical: 15, }} >
                            <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >Price</Text>
                        </View>
                        <View style={{ paddingHorizontal: 20 , borderTopWidth: 1, borderColor: '#fff', paddingVertical: 15, }} >
                            <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >Price</Text>
                        </View>
                        <View style={{ paddingHorizontal: 20 , borderTopWidth: 1, borderColor: '#fff', paddingVertical: 15, }} >
                            <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >Price</Text>
                        </View>
                        <View style={{ paddingHorizontal: 20 , borderTopWidth: 1, borderColor: '#fff', paddingVertical: 15, }} >
                            <Text style={{ color: '#fff', fontSize: 16 , fontStyle: 'italic'}} >Price</Text>
                        </View>



                    </View>
                </Modal>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }} >
                    <TextInputWithLabel
                        placeholder={'Search by Name'}
                        inputStyle={{ width: 278, height: 42 }} />

                    <Pressable
                        onPress={() => setModalVisible(true)}
                        activeOpacity={0.8}
                        style={{ height: 42, width: 42, backgroundColor: '#efeeec', borderRadius: 21, borderWidth: 1, borderColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }} >
                        <Image
                            style={{ height: 15.75, width: 16 }}
                            source={imagePath.filter} />
                    </Pressable>
                </View>

                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.modalView1}>
                        <Text style={styles.modalText1}>Hello World!</Text>
                        <Pressable
                            style={[styles.button1b]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle1}>Hide View</Text>
                        </Pressable>
                    </View>
                </Modal>

                <Pressable
                    onPress={() => setModalVisible(true)}
                    activeOpacity={0.6}
                    style={styles.button1a} >
                    <Text style={{ color: '#7c7c7c' }} >Sort By Name</Text>
                    <Image
                        style={{ height: 7.66, width: 14 }}
                        source={imagePath.dropdown} />
                </Pressable>

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
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 250
    },

    fill: {
        flex: 1,
        backgroundColor: 'lightblue'
    },

    modalView1: {
        marginTop: 220,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#7C7C7C',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    button1a: {
        height: 42,
        width: '100%',
        borderWidth: 1,
        borderColor: '#7C7C7C',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        marginBottom: 10
    },
    button1b: {
        height: 42,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    textStyle1: {
        color: 'black',
        textAlign: 'center',
    },

    modalText1: {
        marginBottom: 15,
    },

    modalView2: {
        height: '100%',
        marginLeft: '25%',
        backgroundColor: '#14252A',
        borderWidth: 1,
        borderColor: '#14252A',
    },

    modalText2: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

//make this component available to the app
export default ShopScreen;
