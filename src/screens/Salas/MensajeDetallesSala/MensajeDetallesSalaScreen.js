import React, {useEffect, useState} from 'react';
import {colors, styleContainer} from '../../../utils/constants/themes';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MensajeSala from '../../../components/molecules/MensajeSala/MensajeSala';
import {View} from 'react-native';
import {styles} from '../../Chat/MensajeDetalles/styles';
import {useSelector} from 'react-redux';

export default function MensajeDetallesSalaScreen({route}) {
  const [mismoUser, setMismoUser] = useState(false);
  const user = useSelector(state => state.user.user);
  const {mensaje} = route.params;

  useEffect(() => {
    // comprueba si el mensaje es del usuario para poder eliminarlo
    if (user.username === mensaje.username) {
      setMismoUser(true);
    } else {
      setMismoUser(false);
    }
  }, [user, mensaje]);

  return (
    <View style={styleContainer}>
      <View style={styles.mensajeContainer}>
        {mismoUser && (
          <Ionicons
            name="trash-outline"
            size={30}
            color={colors.red}
            onPress={() => {}}
          />
        )}
        <MensajeSala mensaje={mensaje} />
      </View>
    </View>
  );
}
