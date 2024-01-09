import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import { ApplyLoyalityCards, MyLoyalityCard1, MyLoyalityCard2, MyLoyalityCard3} from '../screens';

const Stack = createNativeStackNavigator();

export default function CardStack () {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name={navigationStrings.APPLY_LOYALITY_CARDS}
            component={ApplyLoyalityCards}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.MY_LOYALITY_CARD_1}
            component={MyLoyalityCard1}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.MY_LOYALITY_CARD_2}
            component={MyLoyalityCard2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.MY_LOYALITY_CARD_3}
            component={MyLoyalityCard3}
            options={{headerShown: false}}
          />
  
        </Stack.Navigator>
    );
  };

