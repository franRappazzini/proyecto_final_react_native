import InfoSalaScreen from '../../screens/Salas/InfoSala/InfoSalaScreen';
import React from 'react';
import {colors} from '../../utils/constants/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function InfoSalaNavigation({route}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.light,
        headerStyle: {backgroundColor: colors.darkGrey},
      }}>
      <Stack.Screen
        name="InfoSalaScreen"
        component={() => <InfoSalaScreen sala={route.params} />}
        options={{title: 'Info. de sala'}}
      />
    </Stack.Navigator>
  );
}
