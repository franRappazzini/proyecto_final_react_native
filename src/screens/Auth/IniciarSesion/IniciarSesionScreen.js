import React, {useEffect, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {getAllUsers, getUser} from '../../../redux/actions/UserActions';
import {useDispatch, useSelector} from 'react-redux';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import ModalError from '../../../components/molecules/ModalError/ModalError';
import NetInfo from '@react-native-community/netinfo';
import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import TextInputPassword from '../../../components/atoms/TextInputPassword/TextInputPassword';
import TextLabel from '../../../components/atoms/TextLabel/TextLabel';
import {colors} from '../../../utils/constants/themes';
import {insertUserLogIn} from '../../../utils/services/sql';
import {styles} from './styles';

export default function IniciarSesionScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [modalErrorVisible, setModalErrorVisible] = useState(false);
  const [modalInternet, setModalInternet] = useState(false);
  const usuarios = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  function handleIniciarSesion() {
    const indexUsuario = usuarios.findIndex(
      user => (user.email || user.username) === email.trim(),
    );

    const usuario = usuarios[indexUsuario];

    if (usuario && contrasenia === usuario.password) {
      insertUserLogIn(
        usuario.nombre,
        usuario.apellido,
        usuario.email,
        usuario.username,
        usuario.password,
        usuario.avatar,
      );
      dispatch(getUser(usuario));
      navigation.navigate('Tab');
      setEmail('');
      setContrasenia('');
    } else {
      setModalErrorVisible(true);
    }
  }

  useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      state.isConnected === true ? null : setModalInternet(true);
    });
  }, []);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.welcomeText}>Bienvenido nuevamente! 😎</Text>
      <View style={styles.inputsContainer}>
        <TextLabel text="Username o email" />
        <TextInputCustom
          placeholder="Usuario o email"
          value={email.trim()}
          onChangeText={setEmail}
          type="email-address"
          autoCapitalize="none"
          autoFocus={true}
        />

        <TextLabel text="Contraseña" />
        <TextInputPassword
          placeholder="Contraseña"
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

      <ModalError
        textError="No hay conexión a internet"
        setModalErrorVisible={setModalInternet}
        modalErrorVisible={modalInternet}
        goBack={() => navigation.goBack()}
      />
    </View>
  );
}
