//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import imagePath from '../../config/imagePath';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import HeaderComponent from '../../components/HeaderComponent';
import BtnComponent from '../../components/ButtonComponent';
import navigationStrings from '../../config/navigationStrings';
import { TextInput } from 'react-native-gesture-handler';

// create a component
const Search = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.mainView}>
                <HeaderComponent
                    hdrText={'Search'}
                    onPress={() => navigation.goBack()} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <TextInputWithLabel
                        inputStyle={{ width: 278 }} />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ height: 42, width: 42, backgroundColor: '#efeeec', borderRadius: 21, borderWidth: 1, borderColor: '#dcdcdc', alignItems: 'center', justifyContent: 'center' }} >
                        <Image
                            style={{ height: 15.75, width: 16 }}
                            source={imagePath.filter} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>
                    <Text>Recent Searches</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.FOODITEM)} >
                        <Text style={{ textDecorationLine: 'underline' }} >Clear All</Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },

    mainView: {
        flex: 1
    }
});

//make this component available to the app
export default Search;
