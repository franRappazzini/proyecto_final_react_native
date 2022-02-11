import CrearUserScreen from '../../screens/Auth/CrearUser/CrearUserScreen';
import HomeScreen from '../../screens/Auth/Home/HomeScreen';
import IniciarSesionScreen from '../../screens/Auth/IniciarSesion/IniciarSesionScreen';
import React from 'react';
import {colors} from '../../utils/constants/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.dark},
        headerShadowVisible: false,
        headerTintColor: colors.light,
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CrearUserScreen"
        component={CrearUserScreen}
        options={{title: 'Registrarse'}}
      />
      <Stack.Screen
        name="IniciarSesionScreen"
        component={IniciarSesionScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
}
