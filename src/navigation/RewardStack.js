import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import {  AvailableRewards, ConnectRewards,  RemainingRewards } from '../screens';

const Stack = createNativeStackNavigator();

export default function RewardStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name={navigationStrings.CONNECT_REWARDS}
            component={ConnectRewards}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name={navigationStrings.AVAILABLE_REWARDS}
            component={AvailableRewards}
            options={{headerShown: false}}
          />
    
        </Stack.Navigator>
    );
  };

