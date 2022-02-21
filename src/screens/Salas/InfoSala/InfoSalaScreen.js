import {Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {useDispatch, useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {deleteSala, removeSalaFromFav} from '../../../redux/actions/SalaAction';
import {styles} from './styles';
import ModalEliminar from '../../../components/molecules/ModalEliminar/ModalEliminar';

export default function InfoSalaScreen({navigation}) {
  const [modalEliminar, setModalEliminar] = useState(false);
  const uniqueSala = useSelector(state => state.sala.uniqueSala);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const arrayMensajes = uniqueSala.messages
    ? Object.values(uniqueSala.messages)
    : [];

  // verfica el creado para permitir eliminar la sala
  function verificarCreador() {
    if (uniqueSala.createdBy === user.username) {
      return (
        <View style={styles.iconContainer}>
          <Ionicons
            name="trash-outline"
            color={colors.red}
            size={30}
            onPress={() => {
              setModalEliminar(true);
            }}
          />
        </View>
      );
    }
  }

  return (
    <View style={styleContainer}>
      <Text style={styles.text}>{uniqueSala.name.toUpperCase()}</Text>
      <Text style={styles.text}>{uniqueSala.description}</Text>
      <Text style={styles.text}>Creador: {uniqueSala.createdBy}</Text>
      <Text style={styles.text}>Mensajes: {arrayMensajes.length}</Text>
      <Text style={styles.text}>Fecha: {uniqueSala.date}</Text>

      {verificarCreador()}

      <ModalEliminar
        text="Desea eliminar la sala?"
        modalEliminar={modalEliminar}
        setModalEliminar={setModalEliminar}
        confirmEliminar={() => {
          dispatch(deleteSala(uniqueSala.id));
          dispatch(removeSalaFromFav(uniqueSala));
          navigation.goBack();
        }}
      />
    </View>
  );
}
