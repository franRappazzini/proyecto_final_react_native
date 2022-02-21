import {ImageBackground, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {useDispatch, useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MensajeSala from '../../../components/molecules/MensajeSala/MensajeSala';
import {deleteMensajeSala} from '../../../redux/actions/SalaAction';
import {styles} from './styles';
import ModalEliminar from '../../../components/molecules/ModalEliminar/ModalEliminar';

export default function MensajeDetallesSalaScreen({route, navigation}) {
  const [modalEliminar, setModalEliminar] = useState(false);
  const [mensajePropio, setMensajePropio] = useState(false);
  const user = useSelector(state => state.user.user);
  const uniqueSala = useSelector(state => state.sala.uniqueSala);
  const {mensaje} = route.params;
  const dispatch = useDispatch();

  // comprueba si el mensaje es del usuario para poder eliminarlo
  useEffect(() => {
    if (user.username === mensaje.username) {
      setMensajePropio(true);
    }
  }, [mensaje, user.username]);

  return (
    <View style={styleContainer}>
      <ImageBackground
        source={require('../../../assets/img/background-chat.jpg')}
        style={
          mensajePropio ? styles.miMensajeContainer : styles.mensajeContainer
        }>
        {mensajePropio && (
          <Ionicons
            name="trash-outline"
            size={30}
            color={colors.red}
            onPress={() => {
              setModalEliminar(true);
            }}
            style={styles.trashIcon}
          />
        )}
        <MensajeSala mensaje={mensaje} />
      </ImageBackground>

      <ModalEliminar
        text="Desea eliminar el mensaje?"
        modalEliminar={modalEliminar}
        setModalEliminar={setModalEliminar}
        confirmEliminar={() => {
          dispatch(deleteMensajeSala(uniqueSala.id, mensaje.id));
          navigation.goBack();
        }}
      />
    </View>
  );
}
