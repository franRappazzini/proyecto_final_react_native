import ChatList from '../../../components/molecules/ChatList/ChatList';
import React from 'react';
import {ScrollView} from 'react-native';
import {styleContainer} from '../../../utils/constants/themes';

export default function ChatsListScreen({navigation}) {
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
