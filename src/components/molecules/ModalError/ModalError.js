import {View, Text, Modal} from 'react-native';
import React from 'react';
import {styles} from './sytles';
import BtnCustom from '../../atoms/BtnCustom/BtnCustom';

export default function ModalError({
  textError,
  setModalErrorVisible,
  modalErrorVisible,
}) {
  return (
    <Modal
      visible={modalErrorVisible}
      onRequestClose={() => setModalErrorVisible(!modalErrorVisible)}
      transparent={true}
      statusBarTranslucent={true}>
      <View style={styles.backgroundContainer}>
        <View style={styles.modalContainer}>
          <Text style={styles.textError}>{textError}</Text>
          <BtnCustom
            text="OK"
            onPress={() => setModalErrorVisible(!modalErrorVisible)}
          />
        </View>
      </View>
    </Modal>
  );
}
