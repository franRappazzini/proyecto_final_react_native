import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../../utils/constants/themes';
import {useDispatch, useSelector} from 'react-redux';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import TextLabel from '../../../components/atoms/TextLabel/TextLabel';
import {getAllUsers, getUser} from '../../../redux/actions/UserActions';
import {styles} from './styles';
import ModalError from '../../../components/molecules/ModalError/ModalError';

export default function IniciarSesionScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [modalErrorVisible, setModalErrorVisible] = useState(false);
  const usuarios = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  function handleIniciarSesion() {
    const indexUsuario = usuarios.findIndex(
      user => (user.email || user.username) === email,
    );

    const usuario = usuarios[indexUsuario];

    if (usuario && contrasenia === usuario.password) {
      dispatch(getUser(usuario));
      navigation.navigate('Tab');
      setEmail('');
      setContrasenia('');
    } else {
      setModalErrorVisible(true);
    }
  }

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.welcomeText}>Bienvenido nuevamente! 😎</Text>
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

      <ModalError
        textError="Usuario/email o contraseña incorrectos"
        setModalErrorVisible={setModalErrorVisible}
        modalErrorVisible={modalErrorVisible}
      />
    </View>
  );
}
