import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  addUserToFav,
  removeUserToFav,
  userChat,
} from '../../../redux/actions/UserActions';
import {useDispatch, useSelector} from 'react-redux';

import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import Usuarios from '../../../components/molecules/Usuarios/Usuarios';
import {styleContainer} from '../../../utils/constants/themes';
import {styles} from './styles';

export default function UsuariosListScreen({navigation}) {
  const [busqueda, setBusqueda] = useState('');
  const usuarios = useSelector(state => state.user.users);
  const user = useSelector(state => state.user.user);
  const usersFav = useSelector(state => state.user.usersFav);
  // todos los usuarios menos el que inicio sesion
  const otrosUsuarios = usuarios.filter(usuario => usuario.id !== user.id);
  const dispatch = useDispatch();

  // filtro de busqueda
  const busquedaUsers =
    busqueda.trim() !== ''
      ? otrosUsuarios.filter(
          usuario =>
            usuario.username.toLowerCase().includes(busqueda.toLowerCase()) ||
            usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            usuario.apellido.toLowerCase().includes(busqueda.toLowerCase()),
        )
      : otrosUsuarios;

  return (
    <View style={styleContainer}>
      <View style={styles.inputContainer}>
        <TextInputCustom
          placeholder="Buscar usuarios"
          value={busqueda.trim()}
          onChangeText={setBusqueda}
          autoCapitalize="none"
        />
      </View>

      {usersFav.length > 0 && (
        <FlatList
          data={usersFav}
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
              eliminarFavorito={() => dispatch(removeUserToFav(item))}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}

      {busquedaUsers && busquedaUsers.length > 0 ? (
        <FlatList
          data={busquedaUsers}
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
              agregarFavorito={() => dispatch(addUserToFav(item))}
              eliminarFavorito={() => dispatch(removeUserToFav(item))}
            />
          )}
        />
      ) : (
        <Text style={styles.textError}>Su busqueda no produjo resultados</Text>
      )}
    </View>
  );
}
