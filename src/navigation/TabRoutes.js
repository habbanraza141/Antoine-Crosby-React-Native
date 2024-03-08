
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigationStrings from "../config/navigationStrings";
import imagePath from "../config/imagePath";
import HomeStack from "./HomeStack";
import { Image } from "react-native";
import TabbarComp from "../components/TabbarComp";
import ShopScreen from "../screens/Shop/Shop";
import CardStack from "./CardStack";
import ProfileStack from "./AccountStack";
import AccountStack from "./AccountStack";
import ShopStack from "./ShopStack";

const Tab = createBottomTabNavigator();




export default function TabRoutes () {
    return (
        <Tab.Navigator
            tabBar={props => <TabbarComp {...props} />}
            initialRouteName="HomeStack"
            >

            <Tab.Screen
            name={'Home'}
            component={HomeStack}
            options={{headerShown: false}}
               />
            <Tab.Screen
            name={'Shop'}
            component={ShopStack}
            options={{headerShown: false}}
               />
            <Tab.Screen
            name={'Card'}
            component={CardStack}
            options={{headerShown: false}}
               />
            <Tab.Screen
            name={'Profile'}
            component={AccountStack}
            options={{headerShown: false}}
               />
           
           
        </Tab.Navigator>
    );
};
