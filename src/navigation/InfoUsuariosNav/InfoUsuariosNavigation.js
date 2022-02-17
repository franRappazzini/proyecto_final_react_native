import InfoUsuariosScreen from '../../screens/Usuarios/InfoUsuarios/InfoUsuariosScreen';
import React from 'react';
import {colors} from '../../utils/constants/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function InfoUsuariosNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.light,
        headerStyle: {backgroundColor: colors.darkGrey},
      }}>
      <Stack.Screen name="InfoUsuarioScreen" component={InfoUsuariosScreen} />
    </Stack.Navigator>
  );
}
