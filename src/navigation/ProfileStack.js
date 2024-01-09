import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import { ChangePassword, EditProfile, MyProfile } from '../screens';

const Stack = createNativeStackNavigator();

export default function ProfileStack () {
    return (
        <Stack.Navigator>

          <Stack.Screen
            name={navigationStrings.MY_PROFILE}
            component={MyProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.EDIT_PROFILE}
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.CHANGE_PASSWORD}
            component={ChangePassword}
            options={{headerShown: false}}
          />
          
    
        </Stack.Navigator>
    );
  };

