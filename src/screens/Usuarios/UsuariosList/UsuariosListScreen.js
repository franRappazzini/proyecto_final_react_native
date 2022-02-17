import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import React from 'react';
import Usuarios from '../../../components/molecules/Usuarios/Usuarios';
import {styleContainer} from '../../../utils/constants/themes';
import {userChat} from '../../../redux/actions/UserActions';

export default function UsuariosListScreen({navigation}) {
  const usuarios = useSelector(state => state.user.users);
  const user = useSelector(state => state.user.user);
  // todos los usuarios menos el que inicio sesion
  const otrosUsuarios = usuarios.filter(usuario => usuario.id !== user.id);
  const dispatch = useDispatch();

  return (
    <View style={styleContainer}>
      {otrosUsuarios && (
        <FlatList
          data={otrosUsuarios}
          renderItem={({item}) => (
            <Usuarios
              username={item.username}
              nombre={item.nombre}
              apellido={item.apellido}
              onPress={() => {
                dispatch(userChat(item));
                navigation.navigate('ChatNav', {
                  username: item.username,
                });
              }}
              navigation={() => {
                dispatch(userChat(item));
                navigation.navigate('InfoUsuariosNav');
              }}
            />
          )}
        />
      )}
    </View>
  );
}
