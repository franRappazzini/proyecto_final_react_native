import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import Usuarios from '../../../components/molecules/Usuarios/Usuarios';
import {styleContainer} from '../../../utils/constants/themes';
import {styles} from './styles';
import {userChat} from '../../../redux/actions/UserActions';

export default function UsuariosListScreen({navigation}) {
  const [busqueda, setBusqueda] = useState('');
  const usuarios = useSelector(state => state.user.users);
  const user = useSelector(state => state.user.user);
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

  useEffect(() => {
    console.warn(busquedaUsers);
  }, [busquedaUsers]);

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
            />
          )}
        />
      ) : (
        <Text style={styles.textError}>Su busqueda no produjo resultados</Text>
      )}
    </View>
  );
}
