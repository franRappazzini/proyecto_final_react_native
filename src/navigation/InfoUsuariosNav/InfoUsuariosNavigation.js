import InfoUsuariosScreen from '../../screens/Usuarios/InfoUsuarios/InfoUsuariosScreen';
import React from 'react';
import {colors} from '../../utils/constants/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function InfoUsuariosNavigation() {
  const userChat = useSelector(state => state.user.userChat);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.light,
        headerStyle: {backgroundColor: colors.darkGrey},
      }}>
      <Stack.Screen
        name="InfoUsuarioScreen"
        component={InfoUsuariosScreen}
        options={{title: `Info. de ${userChat.username}`}}
      />
    </Stack.Navigator>
  );
}
