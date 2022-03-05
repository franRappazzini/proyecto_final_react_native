import {Modal, Text, View} from 'react-native';

import BtnCustom from '../../atoms/BtnCustom/BtnCustom';
import React from 'react';
import {styles} from './sytles';

export default function ModalError({
  textError,
  setModalErrorVisible,
  modalErrorVisible,
  goBack,
}) {
  function verificarGoBack() {
    if (goBack) {
      goBack();
      setModalErrorVisible(!modalErrorVisible);
    } else {
      setModalErrorVisible(!modalErrorVisible);
    }
  }

  return (
    <Modal
      visible={modalErrorVisible}
      onRequestClose={() => setModalErrorVisible(!modalErrorVisible)}
      transparent={true}
      statusBarTranslucent={true}>
      <View style={styles.backgroundContainer}>
        <View style={styles.modalContainer}>
          <Text style={styles.textError}>{textError}</Text>
          <BtnCustom text="OK" onPress={verificarGoBack} />
        </View>
      </View>
    </Modal>
  );
}
