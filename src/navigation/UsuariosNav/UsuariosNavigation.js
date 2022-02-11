import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function UsuariosNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsuariosNav" component={'UsuariosNav'} />
    </Stack.Navigator>
  );
}
