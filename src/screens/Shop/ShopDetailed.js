//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import imagePath from '../../config/imagePath';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import HeaderComponent from '../../components/HeaderComponent';
import Colors from '../../config/Colors';

const colors = ['#AD43B7', '#64BABF', '#68B74D', '#DFAC2A', '#BA3E3E']; // Example colors

// create a component
const ShopDetailed = () => {
    const [quantity, setQuantity] = useState(0)
    const availableSizes = ['S', 'M', 'L', 'XL']; // Example sizes
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };


    const [value, setValue] = useState(0);

 

    return (
        <View style={styles.container}>

            <HeaderComponent
                container={{ paddingLeft: 20 }}
                hdrText={'Shop Detailed'} />
            <ScrollView>

                <View style={{ height: 335, backgroundColor: '#efeeec', flexDirection: 'row', marginVertical: 20 }} >
                    <Image
                        source={imagePath.fashionBag}
                        style={{ width: 287, height: 307 }} />
                    <View style={{ justifyContent: 'center' }}>
                        <View style={{ width: 67, height: 65, backgroundColor: '#fff', borderRadius: 7, alignItems: 'center', justifyContent: 'center' }} >
                            <View style={{ width: 59, height: 57, backgroundColor: '#efeeec', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} >
                                <Image
                                    style={{ width: 46, height: 47 }}
                                    source={imagePath.fashionBag} />
                            </View>
                        </View>
                        <View style={{ width: 67, height: 65, backgroundColor: '#fff', borderRadius: 7, alignItems: 'center', justifyContent: 'center', marginVertical: 5 }} >
                            <View style={{ width: 59, height: 57, backgroundColor: '#efeeec', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} >
                                <Image
                                    style={{ width: 46, height: 47 }}
                                    source={imagePath.fashionBag} />
                            </View>
                        </View>
                        <View style={{ width: 67, height: 65, backgroundColor: '#fff', borderRadius: 7, alignItems: 'center', justifyContent: 'center' }} >
                            <View style={{ width: 59, height: 57, backgroundColor: '#efeeec', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} >
                                <Image
                                    style={{ width: 46, height: 47 }}
                                    source={imagePath.fashionBag} />
                            </View>
                        </View>

                    </View>
                </View>

                <View style={styles.mainView}>

                    <View style={{ width: 62, height: 22, backgroundColor: '#E6E8EB', alignItems: 'center', justifyContent: 'center' }}  >
                        <Text style={{ fontSize: 10 }} >In Stock</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 3 }} >
                        <Text style={{ fontSize: 26, fontStyle: 'italic', fontWeight: 'bold' }} >Fashion Bag</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }} >$113 </Text>
                            <Text style={{ fontSize: 22, fontWeight: 'bold', textDecorationLine: 'line-through', color: '#8E9093' }} >$113</Text>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }} >
                        <Text>4.8</Text>
                        <Image
                            style={{ height: 12, width: 12 }}
                            source={imagePath.star} />
                        <Image
                            style={{ height: 12, width: 12 }}
                            source={imagePath.star} />
                        <Image
                            style={{ height: 12, width: 12 }}
                            source={imagePath.star} />
                        <Image
                            style={{ height: 12, width: 12 }}
                            source={imagePath.star} />
                        <Image
                            style={{ height: 12, width: 12 }}
                            source={imagePath.star} />
                    </View>

                    <Text>lorem cncjs jbjd dhsjb hbfhsb fhjdfjd djhfjdf fbueie efjs jsfj jfyi aosss nj dfnd ndjsd jufhu qwa dkps dkdm dnsjsndj sjkdns </Text>
                </View>


                <View style={{ height: 2, backgroundColor: '#e2e2e2', marginVertical: 15 }} >

                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '600' }} >Select Color</Text>
                    <View style={styles.colorContainer}>
                        {colors.map((item, index) => {
                            const isActive = value === index
                            return (
                                <View key={item}>
                                    <TouchableOpacity
                                    activeOpacity={0.8}
                                        onPress={() => {
                                            setValue(index)
                                        }}>
                                        <View style={[styles.selectedColorButton, isActive && {borderColor: 'black',  backgroundColor: item, borderWidth: 1}]}>
                                            <View style={[styles.colorButton, {backgroundColor: item}]} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </View>
                <View style={{ height: 2, backgroundColor: '#e2e2e2', marginVertical: 15 }} >

                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '600' }} >Select Size</Text>

                    <View style={styles.sizeContainer}>
                        {availableSizes.map((size) => (
                            <TouchableOpacity
                                key={size}
                                style={[
                                    styles.sizeButton,
                                    selectedSize === size && styles.selectedSize,
                                ]}
                                onPress={() => handleSizeSelection(size)}
                            >
                                <Text style={[styles.sizeText, selectedSize === size && styles.selectedText]}>
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={{ height: 2, backgroundColor: '#e2e2e2', marginVertical: 15 }} >

                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '600' }} >Select Quantity</Text>
                    <View style={{ width: 116, justifyContent: 'space-between', flexDirection: 'row' }} >
                        <TouchableOpacity style={{ backgroundColor: '#F9F9F9', width: 30, height: 30, borderWidth: 0.4, borderColor: '#A6A798', alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => setQuantity(quantity - 1)}>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#F9F9F9', width: 56, height: 30, borderWidth: 0.4, borderColor: '#A6A798', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 17, fontWeight: 500 }} >{quantity}</Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#F9F9F9', width: 30, height: 30, borderWidth: 0.4, borderColor: '#A6A798', alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => setQuantity(quantity + 1)}>

                            <Text>+</Text>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: 2, backgroundColor: '#e2e2e2', marginVertical: 15 }} >

                </View>

                <View style={{ paddingHorizontal: 20 }} >
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10, }}>
                        <Text style={{ fontSize: 18, fontStyle: 'italic', fontWeight: '600' }} >Product Description</Text>
                        <Image
                            style={{ width: 14, height: 7.66 }}
                            source={imagePath.dropdown} />
                    </TouchableOpacity>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                    </Text>
                </View>


                <View style={{ height: 2, backgroundColor: '#e2e2e2', marginVertical: 15 }} >

                </View>

                <View style={{ paddingHorizontal: 20 }} >
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 10, }}>
                        <Text style={{ fontSize: 18, fontStyle: 'italic', fontWeight: '600' }} >Product Reviews</Text>
                        <Image
                            style={{ width: 14, height: 7.66 }}
                            source={imagePath.dropdown} />
                    </TouchableOpacity>

                    <View style={{ height: 172, borderWidth: 0.5, borderColor: '#A6A798', marginVertical: 10, padding: 15 }}>
                        <View style={{ flexDirection: 'row' }} >
                            <Image
                                style={{ height: 47, width: 47 }}
                                source={imagePath.reviewWali} />
                            <View style={{ marginLeft: 10 }} >
                                <Text style={{ fontSize: 16, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 5 }} >Johnson</Text>
                                <Image source={imagePath.star} style={{ height: 11, width: 11 }} />
                            </View>
                        </View>

                        <Text style={{ marginVertical: 10 }} >ncxbc jsdnjs jsndjsncx znzn sjncjs jncjs jnxb cjnxz cnzx cnxz cn xzjnc nx cn hcb hs c dchsd c cjhdbc js chnsb dchb h dc dnc hs </Text>
                        <Text style={{ color: 'grey' }} >20 Feb 2022 </Text>
                    </View>

                    <View style={{ height: 172, borderWidth: 0.5, borderColor: '#A6A798', marginVertical: 10, padding: 15 }}>

                        <View style={{ flexDirection: 'row' }} >
                            <Image
                                style={{ height: 47, width: 47 }}
                                source={imagePath.reviewWali} />
                            <View style={{ marginLeft: 10 }} >
                                <Text style={{ fontSize: 16, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 5 }} >Johnson</Text>
                                <Image source={imagePath.star} style={{ height: 11, width: 11 }} />
                            </View>
                        </View>

                        <Text style={{ marginVertical: 10 }} >ncxbc jsdnjs jsndjsncx znzn sjncjs jncjs jnxb cjnxz cnzx cnxz cn xzjnc nx cn hcb hs c dchsd c cjhdbc js chnsb dchb h dc dnc hs </Text>
                        <Text style={{ color: 'grey' }} >20 Feb 2022 </Text>
                    </View>
                </View>

                <View style={{ height: 2, backgroundColor: '#e2e2e2', marginVertical: 15 }} >

                </View>

                <View style={{ paddingHorizontal: 20 }} >
                    <Text style={{ fontSize: 18, fontWeight: '600' }} >Add Review</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <TextInputWithLabel
                            placeholder={'Name'}
                            inputStyle={{ width: 158 }} />
                        <TextInputWithLabel
                            placeholder={'Rating'}
                            inputStyle={{ width: 158 }} />

                    </View>
                    <TextInputWithLabel
                        placeholder={'Email'} />
                    <TextInputWithLabel
                        inputStyle={{ height: 97, alignItems: 'flex-start', paddingTop: 20 }}
                        placeholder={'Review'} />
                    <BtnComponent
                        btnStyle={{ marginTop: 10 }}
                        btnText={'Submit'}
                        img={imagePath.btnForward} />

                    <BtnComponent
                        btnStyle={{ marginTop: 20 }}
                        img={imagePath.addtocart}
                        btnText={'Add To Cart'}
                        imgStyle={{ tintColor: '#fff' }} />
                </View>

            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 0,
        backgroundColor: '#fff',
    },

    mainView: {
        paddingLeft: 20,
        paddingRight: 20
    },



    sizeContainer: {
        width: 154,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


    sizeButton: {
        width: 31,
        height: 30,
        backgroundColor: '#f3f3f3',
        borderWidth: 1,
        borderColor: '#A6A798',
        alignItems: 'center',
        justifyContent: 'center'
    },

    sizeText: {
        color: '#14252A',
        fontSize: 16,
    },

    selectedSize: {
        backgroundColor: '#14252A',
        borderColor: '#14252A'
    },


    selectedText: {
        color: 'white',
    },


    colorContainer: {
        width: 195,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },


    selectedColorButton: {
        width: 33,
        height: 32,
    },

    colorButton: {
        width: 31,
        height: 30,
    },

});

//make this component available to the app
export default ShopDetailed;
