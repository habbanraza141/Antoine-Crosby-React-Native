import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppStack from "./AppStack";
import CustomDrawerContent from "../components/CustomDrawerContent";
import LegalStack from "./LegalStack";
import CardStack from "./CardStack";
import CartStack from "./CartStack";
import ProfileStack from "./ProfileStack";


const Drawer = createDrawerNavigator()
export default function DrawerStack() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />} >
            <Drawer.Screen name="Home2" component={AppStack} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}