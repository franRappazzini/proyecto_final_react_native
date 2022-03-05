import {FlatList, StatusBar, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {useDispatch, useSelector} from 'react-redux';

import ChatList from '../../../components/molecules/ChatList/ChatList';
import ModalError from '../../../components/molecules/ModalError/ModalError';
import NetInfo from '@react-native-community/netinfo';
import {deleteUserLogIn} from '../../../utils/services/sql';
import {styles} from './styles';
import {userChat} from '../../../redux/actions/UserActions';

export default function ChatsListScreen({navigation}) {
  const [modalInternet, setModalInternet] = useState(false);
  const user = useSelector(state => state.user.user);
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

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

  // si no hay conexion a internet sale al home
  useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      state.isConnected === true ? null : goBackHome();
    });
  }, [navigation]);

  function goBackHome() {
    setModalInternet(true);
    deleteUserLogIn();
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
        />
      ) : (
        <View>
          <Text style={styles.textNoMensajes}>Aun no tienes chats</Text>
          <Text style={styles.textCrearChat}>
            Ve a 'USUARIOS' en la parte superior y clickea en alguno para
            chatear! 😉
          </Text>
        </View>
      )}

      <ModalError
        textError="No hay conexión a internet"
        setModalErrorVisible={setModalInternet}
        modalErrorVisible={modalInternet}
        goBack={() => navigation.goBack()}
      />
    </View>
  );
}
