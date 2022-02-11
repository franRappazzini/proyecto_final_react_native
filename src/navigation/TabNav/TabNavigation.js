import ChatsListScreen from '../../screens/Chat/ChatsList/ChatsListScreen';
import React from 'react';
import SalasListScreen from '../../screens/Salas/SalasList/SalasListScreen';
import UsuariosListScreen from '../../screens/Usuarios/UsuariosList/UsuariosListScreen';
import {colors} from '../../utils/constants/themes';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.darkGrey,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.purple,
        },
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 16,
        },
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.light,
      }}>
      <Tab.Screen name="Chats" component={ChatsListScreen} />

      <Tab.Screen name="Salas" component={SalasListScreen} />

      <Tab.Screen name="Usuarios" component={UsuariosListScreen} />
    </Tab.Navigator>
  );
}
