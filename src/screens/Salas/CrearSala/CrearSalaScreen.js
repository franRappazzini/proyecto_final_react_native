import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {useDispatch, useSelector} from 'react-redux';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import ModalError from '../../../components/molecules/ModalError/ModalError';
import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import TextInputPassword from '../../../components/atoms/TextInputPassword/TextInputPassword';
import TextLabel from '../../../components/atoms/TextLabel/TextLabel';
import {createSala} from '../../../redux/actions/SalaAction';
import {fecha} from '../../../utils/functions/functions';
import {styles} from './styles';

export default function CrearSalaScreen({navigation}) {
  const [nombreSala, setNombreSala] = useState('');
  const [descripcionSala, setDescripcionSala] = useState('');
  const [passwordSala, setPasswordSala] = useState('');
  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [modalErrorVisible, setModalErrorVisible] = useState(false);
  const user = useSelector(state => state.user.user);
  const toggleSwitch = () => setSwitchEnabled(!switchEnabled);
  const dispatch = useDispatch();

  function crearSala() {
    if (
      nombreSala.trim() !== '' &&
      descripcionSala.trim() !== '' &&
      (switchEnabled ? passwordSala.trim() !== '' : true)
    ) {
      dispatch(
        createSala({
          createdBy: user.username,
          date: fecha().day,
          description: descripcionSala,
          name: nombreSala,
          password: switchEnabled ? passwordSala : '',
          type: switchEnabled ? 'private' : 'public',
        }),

        setSwitchEnabled(false),

        navigation.goBack(),
      );
    } else {
      setModalErrorVisible(true);
    }
  }

  return (
    <View style={styles.screenContainer}>
      <TextLabel text="Nombre de sala" />
      <TextInputCustom
        value={nombreSala.trimStart()}
        onChangeText={setNombreSala}
        placeholder="Nombre"
      />

      <TextLabel text="Descripción" />
      <TextInputCustom
        value={descripcionSala.trimStart()}
        onChangeText={setDescripcionSala}
        placeholder="Descripción"
      />

      <View style={styles.switchContainer}>
        <Switch
          trackColor={{false: colors.lightGrey, true: colors.purple}}
          thumbColor={switchEnabled ? colors.lightGrey : colors.light}
          onValueChange={toggleSwitch}
          value={switchEnabled}
        />

        <Text style={styles.textSwtich}>
          {switchEnabled ? 'Privada' : 'Publica'}
        </Text>
      </View>

      {switchEnabled && (
        <View>
          <TextLabel text="Contraseña" />
          <TextInputPassword
            value={passwordSala.trim()}
            onChangeText={setPasswordSala}
            placeholder="Contraseña"
          />
        </View>
      )}

      <View style={styles.crearSalaContainer}>
        <BtnCustom
          text="Crear sala"
          color={colors.purple}
          onPress={crearSala}
        />
      </View>

      <ModalError
        textError="Debe completar todos los campos"
        modalErrorVisible={modalErrorVisible}
        setModalErrorVisible={setModalErrorVisible}
      />
    </View>
  );
}
