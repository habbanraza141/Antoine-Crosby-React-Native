import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import { ContactInformation, HomeScreen, Search } from '../screens';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import CardStack from './CardStack';
import DrawerStack from './DrawerStack';
import CustomerService from './CustomerService';
import LegalStack from './LegalStack';
import ProfileStack from './ProfileStack';
import OrderStack from './OrderStack';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.HOME_SCREEN}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.CONTACT_INFORMATION}
        component={ContactInformation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ShopStack"}
        component={ShopStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"CartStack"}
        component={CartStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"CardStack"}
        component={CardStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"ProfileStack"}
        component={ProfileStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"CustomerService"}
        component={CustomerService}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"LegalStack"}
        component={LegalStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"OrderStack"}
        component={OrderStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerStack"
        component={DrawerStack}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
};

