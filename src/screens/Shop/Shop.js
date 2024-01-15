//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Modal, Pressable, Dimensions, SafeAreaView } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import imagePath from '../../config/imagePath';
import ShopData from './ShopData';
import navigationStrings from '../../config/navigationStrings';
import HeaderComponent from '../../components/HeaderComponent';
import BtnComponent from '../../components/ButtonComponent';
import { Slider } from '@react-native-assets/slider'
import { ScrollView } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const gap = 5;

const availableSpace = screenWidth - (numColumns - 1) * gap;
const itemSize = availableSpace / numColumns;

const colors = ['#AD43B7', '#64BABF', '#68B74D', '#DFAC2A', '#BA3E3E']; // Example colors
const availableSizes = ['S', 'M', 'L', 'XL']; // Example sizes

const ShopScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const [color, setColor] = useState(0);
    const [isTrue1, setTrue1] = useState(false)
    const [isTrue2, setTrue2] = useState(false)
    const [isTrue3, setTrue3] = useState(false)
    const [isTrue4, setTrue4] = useState(false)
    const [isTrue5, setTrue5] = useState(false)
    const [isTrue6, setTrue6] = useState(false)
    const [isTrue7, setTrue7] = useState(false)


    const ShopItems = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate(navigationStrings.SHOP_DETAILED)}
                style={{ flex: 1, margin: 9, borderWidth: 1, borderColor: '#e2e2e2', justifyContent: 'space-between' }} >
                <View style={{ margin: 15 }} >
                    <View style={{ margin: 15 }} >
                        <Image
                            style={{ height: undefined, width: '100%', aspectRatio: 1 }}
                            source={item.shopItemImage} />
                    </View>
                    <View style={{ marginBottom: 4 }} >
                        <Text style={{ fontSize: 16, }} >New Arrival</Text>
                        <Text style={{ fontSize: 20, fontStyle: 'italic' }} >{item.shopItemName}</Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }} >
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }} >{item.shopItemPrice} USD</Text>
                        <View style={{ height: 41, width: 41, backgroundColor: '#14252A', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{ height: 18, width: 18 }}
                                source={imagePath.addtocart} />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (

        <View style={styles.container}>
            <SafeAreaView style={styles.mainView}>
                <ScrollView style={styles.mainView2}>

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

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, height: 72 }} >
                            <Text style={styles.modalText2}>Filter</Text>
                            <Pressable
                                onPress={() => setModalVisible(!modalVisible)}>
                                <View style={{ height: 20, width: 20, alignItems: 'center', justifyContent: 'center' }} >
                                    <Image
                                        style={{ height: 10, width: 10, tintColor: '#fff' }}
                                        source={imagePath.cross} />
                                </View>
                            </Pressable>
                        </View>

                        <View style={{ height: 116, paddingHorizontal: 20, borderTopWidth: 0.4, borderColor: '#fff', justifyContent: 'center' }} >
                            <View style={{ height: 71 }} >
                                <View style={{ height: 24, justifyContent: 'center' }} >
                                    <Text style={{ color: '#fff', fontSize: 16 }} >Price</Text>
                                </View>
                                <View style={{ width: '100%', }} >

                                    <Slider
                                        value={0}                         // set the current slider's value
                                        minimumValue={0}                  // Minimum value
                                        maximumValue={1}                  // Maximum value
                                        step={0}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
                                        minimumTrackTintColor='#fff'      // The track color before the current value
                                        maximumTrackTintColor='#fff'      // The track color after the current value
                                        thumbTintColor='#fff'         // The color of the slider's thumb
                                        thumbStyle={undefined}            // Override the thumb's style
                                        trackStyle={undefined}            // Override the tracks' style
                                        minTrackStyle={undefined}         // Override the tracks' style for the minimum range
                                        maxTrackStyle={undefined}         // Override the tracks' style for the maximum range
                                        vertical={false}                  // If true, the slider will be drawn vertically
                                        inverted={false}                  // If true, min value will be on the right, and max on the left
                                        enabled={true}                    // If false, the slider won't respond to touches anymore
                                        trackHeight={4}                   // The track's height in pixel
                                        thumbSize={15}                    // The thumb's size in pixel
                                        thumbImage={undefined}            // An image that would represent the thumb
                                        slideOnTap={true}                 // If true, touching the slider will update it's value. No need to slide the thumb.
                                        onValueChange={undefined}         // Called each time the value changed. The type is (value: number) => void
                                        onSlidingStart={undefined}        // Called when the slider is pressed. The type is (value: number) => void
                                        onSlidingComplete={undefined}     // Called when the press is released. The type is (value: number) => void
                                        CustomThumb={undefined}           // Provide your own component to render the thumb. The type is a component: ({ value: number }) => JSX.Element
                                        CustomMark={undefined}            // Provide your own component to render the marks. The type is a component: ({ value: number; active: boolean }) => JSX.Element ; value indicates the value represented by the mark, while active indicates wether a thumb is currently standing on the mark
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 24, alignItems: 'center' }} >
                                    <Text style={{ color: '#fff', fontSize: 16 }} >$10</Text>
                                    <Text style={{ color: '#fff', fontSize: 16 }} >$2k</Text>
                                </View>
                            </View>
                        </View>



                        <View style={{ height: 90, paddingHorizontal: 20, borderTopWidth: 0.5, borderColor: '#fff', justifyContent: 'center' }} >
                            <Text style={{ color: '#fff', fontSize: 22, fontStyle: 'italic', fontWeight: 'bold' }} >Our Categories</Text>
                            <View style={{ height: 6 }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >New Arrival</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ height: 18, width: 18, }}
                                    onPress={() => setTrue6(!isTrue6)} >
                                    <Image
                                        source={isTrue6 ? imagePath.activeCheck : imagePath.inActiveCheck}
                                        style={styles.clickIcon} />

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: 48, paddingHorizontal: 20, borderTopWidth: 0.5, borderColor: '#fff', justifyContent: 'center' }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >Apparel</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ height: 18, width: 18, }}
                                    onPress={() => setTrue6(!isTrue6)} >
                                    <Image
                                        source={isTrue6 ? imagePath.activeCheck : imagePath.inActiveCheck}
                                        style={styles.clickIcon} />

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: 48, paddingHorizontal: 20, borderTopWidth: 0.5, borderColor: '#fff', justifyContent: 'center' }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >Beauty</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ height: 18, width: 18, }}
                                    onPress={() => setTrue6(!isTrue6)} >
                                    <Image
                                        source={isTrue6 ? imagePath.activeCheck : imagePath.inActiveCheck}
                                        style={styles.clickIcon} />

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: 48, paddingHorizontal: 20, borderTopWidth: 0.5, borderColor: '#fff', justifyContent: 'center' }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >Accessories</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ height: 18, width: 18, }}
                                    onPress={() => setTrue6(!isTrue6)} >
                                    <Image
                                        source={isTrue6 ? imagePath.activeCheck : imagePath.inActiveCheck}
                                        style={styles.clickIcon} />

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: 48, paddingHorizontal: 20, borderTopWidth: 0.5, borderColor: '#fff', justifyContent: 'center' }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >Clearance</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ height: 18, width: 18, }}
                                    onPress={() => setTrue6(!isTrue6)} >
                                    <Image
                                        source={isTrue6 ? imagePath.activeCheck : imagePath.inActiveCheck}
                                        style={styles.clickIcon} />

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: 48, paddingHorizontal: 20, borderTopWidth: 0.5, borderColor: '#fff', justifyContent: 'center' }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >Home Decor</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ height: 18, width: 18, }}
                                    onPress={() => setTrue6(!isTrue6)} >
                                    <Image
                                        source={isTrue6 ? imagePath.activeCheck : imagePath.inActiveCheck}
                                        style={styles.clickIcon} />

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: 48, paddingHorizontal: 20, borderTopWidth: 0.5, borderColor: '#fff', justifyContent: 'center' }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                                <Text style={{ color: '#fff', fontSize: 16, fontStyle: 'italic' }} >Shoes</Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{ height: 18, width: 18, }}
                                    onPress={() => setTrue6(!isTrue6)} >
                                    <Image
                                        source={isTrue6 ? imagePath.activeCheck : imagePath.inActiveCheck}
                                        style={styles.clickIcon} />

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: 90, paddingHorizontal: 20, borderTopWidth: 0.5, borderColor: '#fff', justifyContent: 'center' }} >
                            <Text style={{ color: '#fff', fontSize: 22, fontStyle: 'italic', fontWeight: 'bold' }} >Color</Text>
                            <View style={{ height: 6 }} />
                            <View style={styles.colorContainer}>
                                {colors.map((item, index) => {
                                    const isActive = color === index
                                    return (
                                        <View key={item}>
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                onPress={() => {
                                                    setColor(index)
                                                }}>
                                                <View style={[styles.selectedColorButton, isActive && { borderColor: '#fff', backgroundColor: item, borderWidth: 2, borderRadius: 18, }]}>
                                                    <View style={[styles.colorButton, { backgroundColor: item }]} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                        <View style={{ height: 90, paddingHorizontal: 20, borderTopWidth: 0.5, borderColor: '#fff', justifyContent: 'center' }} >
                            <Text style={{ color: '#fff', fontSize: 22, fontStyle: 'italic', fontWeight: 'bold' }} >Size</Text>
                            <View style={{ height: 6 }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={styles.sizeContainer}>
                                    {availableSizes.map((size) => (
                                        <TouchableOpacity
                                            key={size}
                                            style={[
                                                styles.sizeButton,
                                                selectedSize === size && styles.selectedSize,
                                            ]}
                                            onPress={() => handleSizeSelection(size)} >
                                            <Text style={[styles.sizeText, selectedSize === size && styles.selectedText]}>
                                                {size}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20, borderTopWidth: 0.5, borderColor: '#fff', justifyContent: 'center', height: 80 }} >
                            <BtnComponent
                                onPress={() => setModalVisible(!modalVisible)}
                                img={imagePath.btnForward}
                                imgStyle={{ tintColor: '#14252A' }}
                                btnStyle={{ backgroundColor: '#fffffe', height: 41 }}
                                btnText={'Apply Filters'}
                                btnTextStyle={{ color: '#14252A' }} />
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
                    visible={modalVisible2}
                    onRequestClose={() => {
                        setModalVisible2(!modalVisible2);
                    }}>
                    <View style={styles.modalView1}>
                        <Text style={styles.modalText1}>Hello World!</Text>
                        <Pressable
                            style={[styles.button1b]}
                            onPress={() => setModalVisible2(!modalVisible2)}>
                            <Text style={styles.textStyle1}>Hide View</Text>
                        </Pressable>
                    </View>
                </Modal>

                <Pressable
                    onPress={() => setModalVisible2(true)}
                    activeOpacity={0.6}
                    style={styles.button1a} >
                    <Text style={{ color: '#7c7c7c' }} >Sort By Name</Text>
                    <Image
                        style={{ height: 7.66, width: 14 }}
                        source={imagePath.dropdown} />
                </Pressable>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={ShopData}
                    renderItem={ShopItems}
                    numColumns={2}
                />
            </ScrollView>
        </SafeAreaView>
        </View >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    mainView: {

        flex: 1
    },
    mainView2: {
        paddingLeft: 20,
        paddingRight: 20,
    },

    fill: {
        flex: 1,
        backgroundColor: 'lightblue'
    },

    modalView1: {
        marginTop: 190,
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
        justifyContent: 'space-between',
        marginLeft: '30%',
        backgroundColor: '#14252A',
        borderWidth: 1,
        borderColor: '#14252A',
    },

    modalText2: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },


    sizeContainer: {
        width: 154,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    sizeButton: {
        width: 31,
        height: 30,
        backgroundColor: '#14252A',
        borderWidth: 1,
        borderColor: '#A6A798',
        alignItems: 'center',
        justifyContent: 'center'
    },

    sizeText: {
        color: 'white',
        fontSize: 16,
    },

    selectedSize: {
        backgroundColor: '#f3f3f3',
        borderColor: '#fff',
        borderWidth: 1
    },


    selectedText: {
        color: '#14252A',
    },

    colorContainer: {
        width: 195,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    selectedColorButton: {
        width: 35,
        height: 35,
    },

    colorButton: {
        width: 30,
        height: 30,
        borderRadius: 17,
        marginTop: 1.5,

    },

    clickIcon: {
        height: 24,
        width: 24,
        tintColor: '#fff'
    }
});

//make this component available to the app
export default ShopScreen;
