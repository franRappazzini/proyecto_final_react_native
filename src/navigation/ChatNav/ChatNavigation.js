import {Text, View} from 'react-native';

import ChatScreen from '../../screens/Chat/Chat/ChatScreen';
import ChatsListScreen from '../../screens/Chat/ChatsList/ChatsListScreen';
import MensajeDetallesScreen from '../../screens/Chat/MensajeDetalles/MensajeDetallesScreen';
import React from 'react';
import {colors} from '../../utils/constants/themes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ChatNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.darkGrey,
        },
        headerTintColor: colors.light,
      }}>
      {/* <Stack.Screen name="ChatsListScreen" component={ChatsListScreen} /> */}
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={({route}) => ({title: 'username'})}
      />

      <Stack.Screen
        name="MensajeDetallesScreen"
        component={MensajeDetallesScreen}
        options={{title: 'Info. del mensaje'}}
      />
    </Stack.Navigator>
  );
}
