import {Pressable, Text} from 'react-native';

import React from 'react';
import {styles} from './styles';

export default function MensajeChat({mensaje, hora, onPress, onLongPress}) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({pressed}) => [
        {opacity: pressed ? 0.6 : 1},
        styles.mensajeContainer,
      ]}>
      <Text style={styles.mensajeText}>{mensaje}</Text>
      <Text style={styles.horaText}>16:58</Text>
    </Pressable>
  );
}
