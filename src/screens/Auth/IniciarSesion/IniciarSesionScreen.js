import {Alert, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {useDispatch, useSelector} from 'react-redux';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import TextLabel from '../../../components/atoms/TextLabel/TextLabel';
import {getAllUsers} from '../../../redux/actions/UserActions';
import {styles} from './styles';

export default function IniciarSesionScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const usuarios = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  function handleIniciarSesion() {
    const findUsuario = usuarios.find(
      user => (user.email || user.username) === email,
    );

    if (findUsuario && contrasenia === findUsuario.password) {
      navigation.navigate('Tab');
    } else {
      Alert.alert('Usuario/email  o contraseña incorrectos');
    }
  }

  return (
    <View style={styleContainer}>
      <Text>Bienvenido nuevamente! 😎</Text>

      <View style={styles.inputsContainer}>
        <TextLabel text="Username o email" />
        <TextInputCustom
          placeholder="Usuario o email"
          value={email}
          onChangeText={setEmail}
          type="email-address"
          autoCapitalize="none"
          autoFocus={true}
        />

        <TextLabel text="Contraseña" />
        <TextInputCustom
          placeholder="Contraseña"
          type="visible-password"
          value={contrasenia}
          onChangeText={setContrasenia}
        />
      </View>

      <BtnCustom
        text="Iniciar sesion"
        color={colors.purple}
        onPress={handleIniciarSesion}
      />
    </View>
  );
}
