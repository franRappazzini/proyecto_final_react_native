import MensajeDetallesSalaScreen from '../../screens/Salas/MensajeDetallesSala/MensajeDetallesSalaScreen';
import React from 'react';
import SalaScreen from '../../screens/Salas/Sala/SalaScreen';
import {colors} from '../../utils/constants/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function SalasNavigation({route}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.light,
        headerStyle: {backgroundColor: colors.darkGrey},
      }}>
      <Stack.Screen
        name="SalaScreen"
        component={({navigation}) => (
          <SalaScreen navigation={navigation} sala={route.params} />
        )}
        options={() => ({title: route.params.sala.name})}
      />
      <Stack.Screen
        name="MensajeDetalleSalaScreen"
        component={MensajeDetallesSalaScreen}
        options={{title: 'Info. del mensaje'}}
      />
    </Stack.Navigator>
  );
}
