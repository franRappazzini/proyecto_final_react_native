import AuthNavigation from './AuthNav/AuthNavigation';
import ChatNavigation from './ChatNav/ChatNavigation';
import CrearSalaNavigation from './CrearSalaNav/CrearSalaNavigation';
import InfoSalaNavigation from './InfoSalaNav/InfoSalaNavigation';
import InfoUsuariosNavigation from './InfoUsuariosNav/InfoUsuariosNavigation';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SalasNavigation from './SalasNav/SalasNavigation';
import TabNavigation from './TabNav/TabNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import YoNavigation from './YoNav/YoNavigation';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthNav" component={AuthNavigation} />

        <Stack.Screen name="Tab" component={TabNavigation} />

        <Stack.Screen name="ChatNav" component={ChatNavigation} />

        <Stack.Screen name="SalasNav" component={SalasNavigation} />

        <Stack.Screen
          name="InfoUsuariosNav"
          component={InfoUsuariosNavigation}
        />

        <Stack.Screen name="InfoSalaNav" component={InfoSalaNavigation} />

        <Stack.Screen name="CrearSalaNav" component={CrearSalaNavigation} />

        <Stack.Screen name="YoNav" component={YoNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
