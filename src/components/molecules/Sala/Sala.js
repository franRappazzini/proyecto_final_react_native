import {Alert, Modal, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';

import BtnCustom from '../../atoms/BtnCustom/BtnCustom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalError from '../ModalError/ModalError';
import TextInputCustom from '../../atoms/TextInputCustom/TextInputCustom';
import TextInputPassword from '../../atoms/TextInputPassword/TextInputPassword';
import {colors} from '../../../utils/constants/themes';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function Sala({
  sala,
  onPress,
  infoSala,
  agregarFavorito,
  eliminarFavorito,
}) {
  const [contrasenia, setContrasenia] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalErrorVisible, setModalErrorVisible] = useState(false);
  const salasFav = useSelector(state => state.sala.salasFav);
  const {id, name, description, type, password} = sala;

  // verifica si la sala ya esta en favoritos
  function verificarFav() {
    const salaFind = salasFav.findIndex(salaFav => salaFav.id === id);

    if (salaFind !== -1) {
      return (
        <Ionicons
          name="close-circle"
          size={25}
          color={colors.red}
          onPress={eliminarFavorito}
          style={styles.iconHeart}
        />
      );
    } else {
      return (
        <Ionicons
          name="heart"
          size={25}
          color={colors.purple}
          onPress={agregarFavorito}
          style={styles.iconHeart}
        />
      );
    }
  }

  // verifica si la sala es privada para pedir contrasenia
  function salaPrivada() {
    if (type === 'private') {
      setModalVisible(true);
    } else {
      onPress();
    }
  }

  function verificarPassword() {
    if (contrasenia.trim() === password) {
      onPress();
      setModalVisible(false);
      setContrasenia('');
    } else {
      setModalErrorVisible(true);
    }
  }

  return (
    <Pressable
      onPress={salaPrivada}
      style={({pressed}) => [
        {backgroundColor: pressed ? colors.darkGrey : colors.dark},
        styles.salaContainer,
      ]}>
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.salaNombre}>{name}</Text>
          {type === 'private' && (
            <Ionicons name="lock-closed" size={15} color={colors.light} />
          )}
        </View>
        <Text style={styles.salaDescripcion}>{description}</Text>
      </View>

      <View style={styles.iconsContainer}>
        <Ionicons
          name="information-circle"
          color={colors.light}
          size={25}
          style={styles.iconInfo}
          onPress={infoSala}
        />
        {verificarFav()}
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TextInputPassword
              placeholder="Contraseña"
              value={contrasenia.trim()}
              onChangeText={setContrasenia}
            />
            <BtnCustom
              text="Ingresar"
              color={colors.purple}
              onPress={verificarPassword}
            />
          </View>
        </View>
      </Modal>

      <ModalError
        textError="Contraseña incorrecta"
        setModalErrorVisible={setModalErrorVisible}
        modalErrorVisible={modalErrorVisible}
      />
    </Pressable>
  );
}
