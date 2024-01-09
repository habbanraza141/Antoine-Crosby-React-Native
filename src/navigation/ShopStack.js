import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import {    ShopDetailed, ShopScreen } from '../screens';

const Stack = createNativeStackNavigator();

export default function ShopStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name={navigationStrings.SHOP_SCREEN}
            component={ShopScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name={navigationStrings.SHOP_DETAILED}
            component={ShopDetailed}
            options={{headerShown: false}}
          />
    
    
        </Stack.Navigator>
    );
  };

