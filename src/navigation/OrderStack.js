import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import { MyOrders, OrderNumber } from '../screens';

const Stack = createNativeStackNavigator();

export default function OrderStack () {
    return (
        <Stack.Navigator>

          <Stack.Screen
            name={navigationStrings.MY_ORDERS}
            component={MyOrders}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.ORDER_NUMBER}
            component={OrderNumber}
            options={{headerShown: false}}
          />
   
          
    
        </Stack.Navigator>
    );
  };

