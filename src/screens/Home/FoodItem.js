//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import imagePath from '../../config/imagePath';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import HeaderComponent from '../../components/HeaderComponent';
import BtnComponent from '../../components/ButtonComponent';
import navigationStrings from '../../config/navigationStrings';
import { TextInput } from 'react-native-gesture-handler';

// create a component
const  FoodItem = ({navigation}) =>  {
    // state = {
    //     food: null,
    //     foodlist: []
    // }
    // submitFood = (food) => {
    //     this.setState(
    //         {
    //             foodlist:
    //                 [...this.state.foodlist, {
    //                     key: Math.random(),
    //                     name: food
    //                 }]
    //         }
    //     )
    // }
    // deleteFood = (key) => {
    //     this.setState(
    //         {
    //             foodlist:
    //                 [...this.state.foodlist.filter((item) =>
    //                     item.key !== key)]
    //         }
    //     )
    // }
    // render(){ 
        return(
        <View style={styles.container}>
            <View style={styles.mainView}>
                

                <View   style={{ backgroundColor: '#dcdcdc' , width: '100%', height: 60, padding: 20}} >

                    <TextInput
                        // value={this.state.food}
                    />
                </View>

                <Button title='Submit'
                    // onPress={() => this.submitFood(this.state.food)}
                    >

                </Button>
                <Text></Text>
                <Button
                    // onPress={() => this.props.navigation.navigate('List',
                    //     {
                    //         foodlist: this.state.foodlist,
                    //         deleteFood: this.deleteFood
                    //     })
                    // }
                    title='Go to List'>

                </Button>
                <BtnComponent
                    onPress={() => navigation.navigate(navigationStrings.FOODLIST)}
                    btnText={'Go To list'} />
            </View>
        </View>
    )};
// };


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    mainView: {
        marginTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
    }
});

//make this component available to the app
export default FoodItem;
