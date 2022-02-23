import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {styleContainer, colors} from '../../utils/constants/themes';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import BtnCustom from '../../components/atoms/BtnCustom/BtnCustom';
import ModalEliminar from '../../components/molecules/ModalEliminar/ModalEliminar';
import {deleteUserLogIn} from '../../utils/services/sql';

export default function YoScreen({navigation}) {
  const [modalEliminar, setModalEliminar] = useState(false);
  const user = useSelector(state => state.user.user);
  const {nombre, apellido, username, email, avatar} = user;

  return (
    <View style={styleContainer}>
      <Image
        source={{
          uri: avatar,
        }}
        style={styles.img}
      />
      <Text style={styles.text}>{username}</Text>
      <Text style={styles.text}>
        {nombre} {apellido}
      </Text>
      <Text style={styles.text}>{email}</Text>

      <View style={styles.btnContainer}>
        <BtnCustom
          text="Cerrar sesion"
          color={colors.purple}
          onPress={() => setModalEliminar(true)}
        />
      </View>

      <ModalEliminar
        text="Desea cerrar sesion?"
        textEliminar="Confirmar"
        modalEliminar={modalEliminar}
        setModalEliminar={setModalEliminar}
        confirmEliminar={() => {
          deleteUserLogIn();
          navigation.navigate('AuthNav');
        }}
      />
    </View>
  );
}
