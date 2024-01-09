import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import { Checkout2Add, Checkout4, Checkout3, Checkout2, Checkout1, Cart, OrderConfirmation } from '../screens';

const Stack = createNativeStackNavigator();

export default function CartStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name={navigationStrings.CART}
            component={Cart}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.CHECKOUT1}
            component={Checkout1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.CHECKOUT2}
            component={Checkout2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.CHECKOUT2_ADD}
            component={Checkout2Add}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.CHECKOUT3}
            component={Checkout3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.CHECKOUT4}
            component={Checkout4}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.ORDER_CONFIRMATION}
            component={OrderConfirmation}
            options={{headerShown: false}}
          />
    
    
        </Stack.Navigator>
    );
  };

