import {FlatList, View} from 'react-native';

import React from 'react';
import Usuarios from '../../../components/molecules/Usuarios/Usuarios';
import {styleContainer} from '../../../utils/constants/themes';
import {useSelector} from 'react-redux';

export default function UsuariosListScreen({navigation}) {
  const usuarios = useSelector(state => state.user.users);
  const user = useSelector(state => state.user.user);
  // todos los usuarios menos el que inicio sesion
  const otrosUsuarios = usuarios.filter(usuario => usuario.id !== user.id);

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
              onPress={() =>
                navigation.navigate('ChatNav', {
                  // nombre: item.nombre,
                  // apellido: item.apellido,
                  // email: item.email,
                  id: item.id,
                  username: item.username,
                })
              }
              navigation={() =>
                navigation.navigate('InfoUsuariosNav', {
                  nombre: item.nombre,
                  apellido: item.apellido,
                  username: item.username,
                })
              }
            />
          )}
        />
      )}
    </View>
  );
}
