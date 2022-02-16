import {FlatList, ScrollView} from 'react-native';

import ChatList from '../../../components/molecules/ChatList/ChatList';
import React from 'react';
import {styleContainer} from '../../../utils/constants/themes';
import {useSelector} from 'react-redux';

export default function ChatsListScreen({navigation}) {
  const user = useSelector(state => state.user.user);
  const usuarios = useSelector(state => state.user.users);

  // console.warn(usuarios);

  // const userChats = user.chats.forEach(chat =>
  //   Object.keys(chat).map(key => ({...chat[key], id: key})),
  // );

  // const chats = Object.keys(user.chats).map(key => ({
  //   ...user.chats[key],
  //   id: key,
  // }));

  console.warn(user.chats);

  // seguir con nabigation.navigate aca

  return (
    <ScrollView style={styleContainer}>
      {/* <FlatList
        data={chats}
        renderItem={({item}) => (
          <ChatList
            chats={item}
            onPress={() =>
              navigation.navigate('ChatNav', {
                id: user.id,
                username: user.username,
              })
            }
          />
        )}
        keyExtractor={item => item.id}
      /> */}
    </ScrollView>
  );
}
