import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import { LoginAccount, SignupVerification, Splash, CreateAccount, ForgetPassword, OtpCode, NewPassword } from '../screens';

const Stack = createNativeStackNavigator();

export default function AuthStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name={navigationStrings.SPLASH}
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.LOGIN_ACCOUNT}
            component={LoginAccount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.CREATE_ACCOUNT}
            component={CreateAccount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.SIGN_UP_VERIFICATION}
            component={SignupVerification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.FORGET_PASSWORD}
            component={ForgetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.OTP_CODE}
            component={OtpCode}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.NEW_PASSWORD}
            component={NewPassword}
            options={{headerShown: false}}
          />
    
        </Stack.Navigator>
    );
  };

