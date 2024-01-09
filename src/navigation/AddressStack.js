import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import { AddNewAddress, EditAddress,  MyAddress } from '../screens';

const Stack = createNativeStackNavigator();

export default function AddressStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name={navigationStrings.MY_ADDRESS}
            component={MyAddress}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.EDIT_ADDRESS}
            component={EditAddress}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.ADD_NEW_ADDRESS}
            component={AddNewAddress}
            options={{headerShown: false}}
          />
    
        </Stack.Navigator>
    );
  };

