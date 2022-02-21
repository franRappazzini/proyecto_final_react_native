import CrearSalaScreen from '../../screens/Salas/CrearSala/CrearSalaScreen';
import React from 'react';
import {colors} from '../../utils/constants/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function CrearSalaNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.light,
        headerStyle: {backgroundColor: colors.darkGrey},
      }}>
      <Stack.Screen
        name="CrearSalaScreen"
        component={CrearSalaScreen}
        options={{title: 'Nueva sala'}}
      />
    </Stack.Navigator>
  );
}
