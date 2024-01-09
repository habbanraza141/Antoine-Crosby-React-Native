import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import SizeAndFit from '../screens/CustomerService/SizeAndFit';
import ReturnAndExchange from '../screens/CustomerService/ReturnAndExchange';

const Stack = createNativeStackNavigator();

export default function CustomerService () {
    return (
        <Stack.Navigator>

          <Stack.Screen
            name={navigationStrings.SIZE_AND_FIT}
            component={SizeAndFit}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.RETURN_AND_EXCHANGE}
            component={ReturnAndExchange}
            options={{headerShown: false}}
          />

          
    
        </Stack.Navigator>
    );
  };

