import {View, Text, Modal} from 'react-native';
import React from 'react';
import {styles} from './styles';
import BtnCustom from '../../atoms/BtnCustom/BtnCustom';
import {colors} from '../../../utils/constants/themes';

export default function ModalEliminar({
  text,
  modalEliminar,
  setModalEliminar,
  confirmEliminar,
}) {
  return (
    <Modal
      visible={modalEliminar}
      transparent
      onRequestClose={() => setModalEliminar(false)}
      statusBarTranslucent={true}>
      <View style={styles.backgroundContainer}>
        <View style={styles.modalContainer}>
          <Text style={styles.textEliminar}>{text}</Text>

          <View style={styles.btnsContainer}>
            <BtnCustom
              text="Eliminar"
              color={colors.red}
              onPress={confirmEliminar}
            />
            <BtnCustom
              text="Cancelar"
              onPress={() => setModalEliminar(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
