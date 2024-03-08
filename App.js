import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
import TabRoutes from './src/navigation/TabRoutes';
import DrawerStack from './src/navigation/DrawerStack';

const Stack = createNativeStackNavigator();

function App() {
  return (
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
