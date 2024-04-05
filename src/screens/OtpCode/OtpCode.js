//import liraries
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextInputWithLabel from '../../components/TextInputWithLabel';
import BtnComponent from '../../components/ButtonComponent';
import imagePath from '../../config/imagePath';
import navigationStrings from '../../config/navigationStrings';
import OTPTextView from 'react-native-otp-textinput'
import validator from '../../utils/validations';
import { showError } from '../../utils/helperFunctions';
import { otpVerify, userLogin } from '../../redux/actions/auth';
import { saveUserData } from '../../redux/reducers/auth';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import store from '../../redux/store';
const dispatch = { store }

// create a component
const OtpCode = ({ navigation, route }) => {

    // const [timer, setTimer] = useState(60);
    const { data } = route?.params || {}


    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         if (timer > 0) setTimer(timer - 1)
    //     }, 1000);
    //     return () => {
    //         if (timeout) {
    //             clearTimeout(timeout)
    //         }
    //     }
    // }, [timer])

    const [otpInput, setOtpInput] = useState("");

    const input = useRef(null)

    const handleCellTextChange = async (text, i) => {

    };

    // const onResendCode = () => {
    //     setTimer(59)
    // }

    const isValidData = () => {
        const error = validator({
            otp: otpInput
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onDone = async () => {

        const checkValid = isValidData()
        if (checkValid) {
            let apiData = {
                email: data.email,
                otp: otpInput
            }
            try {
                const res = await otpVerify(apiData, data.token)
            } catch (error) {
                console.log("error in login api", error);
                showError(error?.error)
            }
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.midView}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 26 }}>OTP </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 26, fontStyle: 'italic' }}>Code</Text>
                </View>
                <Text style={{ fontSize: 14, marginVertical: 8 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Text>

                <OTPTextView
                    ref={input}
                    // textInputStyle={styles.textInputContainer}
                    handleTextChange={setOtpInput}
                    // handleCellTextChange={handleCellTextChange}
                    inputCount={4}
                    keyboardType="numeric"
                    autoFocus />

                <BtnComponent
                    onPress={onDone}
                    btnStyle={{ marginVertical: 27 }}
                    btnText={'Submit'}
                    img={imagePath.btnForward} />

                <View style={{ justifyContent: 'center', marginVertical: 8, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 14, fontStyle: 'italic', textDecorationLine: 'underline', textAlign: 'center' }}>Resend Code</Text>
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
        marginTop: 115,
        paddingLeft: 20,
        paddingRight: 20
    }
});

//make this component available to the app
export default OtpCode;
