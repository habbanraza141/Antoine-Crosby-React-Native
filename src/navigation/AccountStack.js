import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import {  MyAccount, MyWishlist, RemainingRewards } from '../screens';
import AddressStack from './AddressStack';
import ProfileStack from './ProfileStack';
import CardStack from './CardStack';
import RewardStack from './RewardStack';
import OrderStack from './OrderStack';


const Stack = createNativeStackNavigator();

export default function AccountStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name={navigationStrings.MY_ACCOUNT}
            component={MyAccount}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={"ProfileStack"}
            component={ProfileStack}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name={"AddressStack"}
            component={AddressStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={"OrderStack"}
            component={OrderStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={"CardStack"}
            component={CardStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={"RewardStack"}
            component={RewardStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.REMAINING_REWARDS}
            component={RemainingRewards}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.MY_WISHLIST}
            component={MyWishlist}
            options={{headerShown: false}}
          />
     
          
    
        </Stack.Navigator>
    );
  };

