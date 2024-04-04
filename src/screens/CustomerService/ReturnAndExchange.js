//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import { textScale } from '../../config';

// create a component
const ReturnAndExchange = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>


                <ScrollView>
                    <View style={styles.topView}>
                        <HeaderComponent
                            onPress={() => navigation.goBack()}
                            hdrText={'Return & Exchange'} />
                        <Text style={{ marginBottom: 15, fontStyle: 'italic', fontWeight: '500', fontSize: textScale(20) }} >Return & Exchange</Text>

                        <Text>pellentesque pulvinar pellentesque habitant morbi. In hac habitasse platea pellentesque pulvinar pellentesque habitant morbi. In hac habitasse platea</Text>
                        <View style={{ height: 42, width: '100%', borderColor: '#7c7c7c', borderWidth: 1, marginVertical: 20, justifyContent: 'center', paddingLeft: 20 }} >
                            <Text>Return / Exchange</Text>
                        </View>

                    </View>
                    <View style={{ height: 2, width: '100%', backgroundColor: '#e2e2e2', marginVertical: 15 }} >
                    </View>

                    <View style={{ paddingHorizontal: 20 }} >
                        <Text style={{ marginVertical: 15, fontStyle: 'italic', fontWeight: '500', fontSize: textScale(20) }} >Order Information</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TextInputWithLabel
                                inputStyle={{ width: 157 }}
                                placeholder={'Order Number'} />
                            <TextInputWithLabel
                                inputStyle={{ width: 157 }}
                                placeholder={'Date of Purchase'} />
                        </View>
                        <TextInputWithLabel
                            placeholder={'Product Name'} />
                        <TextInputWithLabel
                            placeholder={'Reason of Return'} />
                    </View>
                    <View style={{ height: 2, width: '100%', backgroundColor: '#e2e2e2', marginVertical: 15 }} >
                    </View>
                    <View style={{ paddingHorizontal: 20 }} >
                        <Text style={{ marginVertical: 15, fontStyle: 'italic', fontWeight: '500', fontSize: textScale(20) }} >Contact Information</Text>

                        <TextInputWithLabel
                            placeholder={'Full Name'} />
                        <TextInputWithLabel
                            placeholder={'Phone Number'} />
                        <TextInputWithLabel
                            placeholder={'Email Address'} />

                        <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center' }} >
                            <Image
                                style={{ height: 20, width: 20, marginRight: 10 }}
                                source={require('../../assets/icons/unchecked.png')} />

                            <Text>I have read and agree to Terms And Conditions</Text>
                        </View>
                        <BtnComponent
                            btnStyle={{ marginBottom: 30 }}
                            btnText={'Submit'}
                            img={imagePath.btnForward} />
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    topView: {
        paddingHorizontal: 20
    }
});

//make this component available to the app
export default ReturnAndExchange;
