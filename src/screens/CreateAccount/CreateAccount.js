//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import navigationStrings from '../../config/navigationStrings';
import { textScale } from '../../config';
import validator from '../../utils/validations';
import { showError } from '../../utils/helperFunctions';
import { userSignup } from '../../redux/actions/auth';

// create a component
const CreateAccount = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isValidData = () => {
        const error = validator({
            email,
            password,
            userName,
            fullName
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onPressSignup = async () => {

        const checkValid = isValidData()

        if (checkValid) {

            let data = {
                userName: userName,
                fullName: fullName,
                email: email,
                password: password,
            }
            try {
                let res = await userSignup(data)
                console.log("res", res);
                navigation.navigate(navigationStrings.OTP_CODE, { data: res.data })

            } catch (error) {
                console.log("error raised", error);
                showError(error?.error || error?.message)

            }

        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.midView}>

                <Text style={{ fontWeight: 'bold', fontSize: textScale(16) }}>Welcome To Antoine Crosby</Text>

                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                    <Text style={{ fontSize: textScale(30) }}>Create Your </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: textScale(26), fontStyle: 'italic' }}>Account</Text>
                </View>

                <Text style={{ fontSize: textScale(14), marginVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Text>

                <TextInputWithLabel
                    value={userName}
                    onChangeText={(value)=>setUserName(value)}
                    placeholder={'User Name'} />

                <TextInputWithLabel
                    value={fullName}
                    onChangeText={(value)=>setFullName(value)}
                    placeholder={'Full Name'} />

                <TextInputWithLabel
                    value={email}
                    onChangeText={(value)=>setEmail(value)}
                    placeholder={'Enter Email Address'} />

                <TextInputWithLabel
                    value={password}
                    onChangeText={(value)=>setPassword(value)}
                    placeholder={'Password'} />

                <BtnComponent
                    onPress={onPressSignup}
                    btnStyle={{ marginTop: 35, marginBottom: 20 }}
                    btnText={'Next'}
                    img={imagePath.btnForward} />

                <View style={{ justifyContent: 'center', marginVertical: 8, flexDirection: 'row' }}>
                    <Text style={{ fontSize: textScale(14) }}>Already have a account? </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(navigationStrings.LOGIN_ACCOUNT)}>

                        <Text style={{ fontSize: textScale(14), fontStyle: 'italic', textDecorationLine: 'underline' }}>Sign in</Text>
                    </TouchableOpacity>
                </View>

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

    midView: {
        marginTop: 90,
        paddingLeft: 20,
        paddingRight: 20
    }
});

//make this component available to the app
export default CreateAccount;
