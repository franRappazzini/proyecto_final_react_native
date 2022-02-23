import {FlatList, StatusBar, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ChatList from '../../../components/molecules/ChatList/ChatList';
import React, {useRef} from 'react';
import {styleContainer, colors} from '../../../utils/constants/themes';
import {userChat} from '../../../redux/actions/UserActions';
import {styles} from './styles';

export default function ChatsListScreen({navigation}) {
  const user = useSelector(state => state.user.user);
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();
  const flatList = useRef(null);

  // actualiza en tiempo real el chat del usuario para mostrar el ultimo mensaje en la lista de chats
  const userActualizado = users.find(u => u.username === user.username);

  const chats =
    userActualizado && userActualizado.chats
      ? Object.keys(userActualizado.chats).map(key => ({
          ...userActualizado.chats[key],
          id: key,
        }))
      : null;

  // busca el usuario que selecciono para ir al chat
  function comprobarUsuario(item) {
    const userFilter = users.filter(u => u.username === item);
    userFilter !== [] && dispatch(userChat(userFilter[0]));
  }

  return (
    <View style={styleContainer}>
      <StatusBar backgroundColor={colors.darkGrey} />

      {chats ? (
        <FlatList
          data={chats}
          renderItem={({item}) => (
            <ChatList
              chats={item}
              onPress={userId => {
                comprobarUsuario(userId);
                navigation.navigate('ChatNav', {
                  username: userId,
                });
              }}
            />
          )}
          keyExtractor={item =>
            Object.values(item)[Object.values(item).length - 1]
          }
          ref={flatList}
          onContentSizeChange={() => flatList.current.scrollToEnd()}
        />
      ) : (
        <View>
          <Text style={styles.textNoMensajes}>Aun no tienes chats</Text>
          <Text style={styles.textCrearChat}>
            Ve a 'USUARIOS' en la parte superior y clickea en alguno para
            hablar! 😉
          </Text>
        </View>
      )}
    </View>
  );
}
