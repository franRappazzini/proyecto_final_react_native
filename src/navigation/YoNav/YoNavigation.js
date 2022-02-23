import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import YoScreen from '../../screens/Yo/YoScreen';
import {colors} from '../../utils/constants/themes';

const Stack = createNativeStackNavigator();

export default function YoNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.darkGrey},
        headerTintColor: colors.light,
      }}>
      <Stack.Screen
        name="YoScreen"
        component={YoScreen}
        options={{title: 'Mi info.'}}
      />
    </Stack.Navigator>
  );
}
