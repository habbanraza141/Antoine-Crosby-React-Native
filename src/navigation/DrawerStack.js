import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import TabRoutes from "./TabRoutes";
import CustomDrawerContent from "../components/CustomDrawerContent";


const Drawer = createDrawerNavigator()
export default function DrawerStack () {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />} >
            <Drawer.Screen name="Home2" component={TabRoutes} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}