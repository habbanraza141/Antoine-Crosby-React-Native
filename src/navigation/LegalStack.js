import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationStrings from '../config/navigationStrings';
import PrivacyPolicy from '../screens/Legal/PrivacyPolicy'
import ShipmentPolicy  from '../screens/Legal/ShipmentPolicy';
import TermsAndConditions from '../screens/Legal/TermsAndConditions';

const Stack = createNativeStackNavigator();

export default function LegalStack () {
    return (
        <Stack.Navigator>

          <Stack.Screen
            name={navigationStrings.PRIVACY_POLICY}
            component={PrivacyPolicy}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.SHIPMENT_POLICY}
            component={ShipmentPolicy}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={navigationStrings.TERMS_AND_CONDITIONS}
            component={TermsAndConditions}
            options={{headerShown: false}}
          />
          
    
        </Stack.Navigator>
    );
  };

