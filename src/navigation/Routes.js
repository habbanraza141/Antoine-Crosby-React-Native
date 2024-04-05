//import liraries
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import DrawerStack from './DrawerStack';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

const Routes = () => {
    const userData = useSelector(state=>state.auth.userData)
    return (
        <NavigationContainer>
            <Stack.Navigator>
{
!!userData?.token? 
<Stack.Screen
    name="DrawerStack"
    component={DrawerStack}
    options={{ headerShown: false }}
/>:
                <Stack.Screen
                    name="AuthStack"
                    component={AuthStack}
                    options={{ headerShown: false }} />


}

            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Routes;
