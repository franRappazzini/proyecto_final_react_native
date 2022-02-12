import ChatList from '../../../components/molecules/ChatList/ChatList';
import React from 'react';
import {ScrollView} from 'react-native';
import {styleContainer} from '../../../utils/constants/themes';
import {useSelector} from 'react-redux';

export default function ChatsListScreen({navigation}) {
  const usuario = useSelector(state => state.user.user);

  console.warn(usuario);
  return (
    <ScrollView style={styleContainer}>
      <ChatList onPress={() => navigation.navigate('ChatNav')} />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
    </ScrollView>
  );
}
