import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {getAllUsers, newUser} from '../../../redux/actions/UserActions';
import {useDispatch, useSelector} from 'react-redux';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import TextLabel from '../../../components/atoms/TextLabel/TextLabel';
import {styles} from './styles';
import ModalError from '../../../components/molecules/ModalError/ModalError';

export default function CrearUserScreen({navigation}) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalErrorVisible, setModalErrorVisible] = useState(false);
  const [modalRegistradosVisible, setModalRegistradosVisible] = useState(false);
  const ususarios = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  function crearUsuario() {
    if (
      nombre !== '' &&
      apellido !== '' &&
      email !== '' &&
      username !== '' &&
      password !== ''
    ) {
      const findUsusario = ususarios.find(
        user => user.username === username || user.email === email,
      );

      if (!findUsusario) {
        dispatch(
          newUser(
            nombre.trim(),
            apellido.trim(),
            email.trim(),
            username.trim(),
            password.trim(),
          ),
        );
        navigation.navigate('IniciarSesionScreen');
      } else {
        setModalRegistradosVisible(true);
      }
    } else {
      setModalErrorVisible(true);
    }
  }

  return (
    <View style={styleContainer}>
      <View style={styles.inputsContainer}>
        <TextLabel text="Nombre" />
        <TextInputCustom
          placeholder="Nombre"
          value={nombre.trim()}
          onChangeText={setNombre}
          autoFocus={true}
          autoComplete="name"
        />

        <TextLabel text="Apellido" />
        <TextInputCustom
          placeholder="Apellido"
          value={apellido.trim()}
          onChangeText={setApellido}
        />

        <TextLabel text="Email" />
        <TextInputCustom
          placeholder="Email"
          value={email.trim()}
          onChangeText={setEmail}
          autoCapitalize="none"
          type="email-address"
          autoComplete="email"
        />

        <TextLabel text="Username" />
        <TextInputCustom
          placeholder="Username"
          value={username.trim()}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextLabel text="Contraseña" />
        <TextInputCustom
          placeholder="Contraseña"
          value={password.trim()}
          onChangeText={setPassword}
          autoCapitalize="none"
          type="visible-password"
        />
      </View>

      <BtnCustom
        text="Registrarse"
        color={colors.purple}
        onPress={crearUsuario}
      />
      <ModalError
        textError="Debe completar todos los campos"
        setModalErrorVisible={setModalErrorVisible}
        modalErrorVisible={modalErrorVisible}
      />
      <ModalError
        textError="El usuario/email ya esta registrado"
        setModalErrorVisible={setModalRegistradosVisible}
        modalErrorVisible={modalRegistradosVisible}
      />
    </View>
  );
}
