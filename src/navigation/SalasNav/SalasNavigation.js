import MensajeDetallesSalaScreen from '../../screens/Salas/MensajeDetallesSala/MensajeDetallesSalaScreen';
import React from 'react';
import SalaScreen from '../../screens/Salas/Sala/SalaScreen';
import {colors} from '../../utils/constants/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function SalasNavigation() {
  const uniqueSala = useSelector(state => state.sala.uniqueSala);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.light,
        headerStyle: {backgroundColor: colors.darkGrey},
      }}>
      <Stack.Screen
        name="SalaScreen"
        component={SalaScreen}
        options={() => ({title: uniqueSala.name})}
      />
      <Stack.Screen
        name="MensajeDetalleSalaScreen"
        component={MensajeDetallesSalaScreen}
        options={{title: 'Info. del mensaje'}}
      />
    </Stack.Navigator>
  );
}
