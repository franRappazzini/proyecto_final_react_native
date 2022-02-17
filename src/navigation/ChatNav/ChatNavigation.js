import ChatScreen from '../../screens/Chat/Chat/ChatScreen';
import MensajeDetallesScreen from '../../screens/Chat/MensajeDetalles/MensajeDetallesScreen';
import React from 'react';
import {colors} from '../../utils/constants/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function ChatNavigation() {
  const userChat = useSelector(state => state.user.userChat);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.darkGrey,
        },
        headerTintColor: colors.light,
      }}>
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{title: userChat.username}}
      />

      <Stack.Screen
        name="MensajeDetallesScreen"
        component={MensajeDetallesScreen}
        options={{title: 'Info. del mensaje'}}
      />
    </Stack.Navigator>
  );
}
