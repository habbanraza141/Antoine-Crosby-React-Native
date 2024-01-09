import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import DrawerStack from './src/navigation/DrawerStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <Routes />
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{ headerShown: false }} />


        <Stack.Screen
          name="DrawerStack"
          component={DrawerStack}
          options={{ headerShown: false }}
        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
