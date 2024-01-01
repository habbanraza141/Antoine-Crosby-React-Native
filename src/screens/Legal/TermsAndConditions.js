//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';

// create a component
const TermsAndConditions = () => {
    return (
        <View style={styles.container}>
            <HeaderComponent
                hdrText={'Terms And Conditions'}/>
                        <Text style={{ marginBottom: 15, fontStyle: 'italic', fontWeight: '500', fontSize: 20 }} >Terms And Conditions</Text>

            <Text>Nunc pellentesque libero et lorem rutrum, sit amet ullamcorper urna tempor. Donec ut condimentum risus, quis egestas dolor. Etiam vitae pellentesque felis. Sed imperdiet lectus nulla, quis accumsan sapien porta ut. Proin at vulputate orci, eu maximus sem. Nam lobortis imperdiet eros, sed varius elit venenatis sed. Fusce nec tincidunt risus. Phasellus vitae arcu rhoncus, sodales magna ac, rutrum purus. Fusce malesuada lectus ex, id facilisis velit fringilla pellentesque.
                Cras posuere felis vitae tellus vestibulum mattis vel ac ipsum. Aliquam pellentesque diam non eros ornare accumsan. Mauris facilisis nibh ligula, id luctus magna consectetur sit amet. Sed ac rutrum tortor. Sed vulputate aliquet d</Text>
            <Text>Nunc pellentesque libero et lorem rutrum, sit amet ullamcorper urna tempor. Donec ut condimentum risus, quis egestas dolor. Etiam vitae pellentesque felis. Sed imperdc rutrum tortor. Sed vulputate aliquet </Text>
            <Text>Nunc pellentesque libero et lorem rutrum, sit amet ullamcorper urna tempor. Donec ut condimentum risus, quis egestas dolor. Etiam vitae pellentesque felis. Sed imperdiet lectus nuat vulputate orci, eu maximus sem. Nam lobortis imperdiet eros, sed varius elit venenatis sed. Fusce nec tincidunt risus. Phasellus vitae arcu rhoncus, sodales magna ac, rutrum purus. Fusce malesuada lectus ex, id facilisis velit fringilla pellentesque.
                Cras posuere felis vitae tellus vestibulum mattis vel ac ipsum. Aliquam pellentesque diam non eros ornare accumsan. Mauris facilisis nibh ligula, id luctus magna consectetur sit amet. Sed ac rutrum tortor. Sed vulputate aliquet d</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    }
});

//make this component available to the app
export default TermsAndConditions;
