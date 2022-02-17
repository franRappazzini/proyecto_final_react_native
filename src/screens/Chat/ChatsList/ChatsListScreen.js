import {FlatList, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ChatList from '../../../components/molecules/ChatList/ChatList';
import React from 'react';
import {styleContainer} from '../../../utils/constants/themes';
import {userChat} from '../../../redux/actions/UserActions';

export default function ChatsListScreen({navigation}) {
  const user = useSelector(state => state.user.user);
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  const chats = Object.values(user.chats);

  // busca el usuario que selecciono para ir al chat
  function comprobarUsuario(item) {
    const userFilter = users.filter(u => u.username === item);
    userFilter !== [] && dispatch(userChat(userFilter[0]));
  }

  return (
    <View style={styleContainer}>
      <FlatList
        data={chats}
        renderItem={({item}) => (
          <ChatList
            chats={item}
            onPress={() => {
              comprobarUsuario(Object.values(item)[0].username);
              navigation.navigate('ChatNav', {
                username: Object.values(item)[0].username,
              });
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
