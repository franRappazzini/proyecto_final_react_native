import {Pressable, Text, TextInput, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {colors} from '../../../utils/constants/themes';
import {styles} from './styles';

export default function InputEnviarMensaje() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Mensaje" style={styles.input} />

      <Pressable
        style={({pressed}) => [{opacity: pressed ? 0.6 : 1}, styles.pressable]}>
        <Ionicons name="send" color={colors.light} size={20} />
      </Pressable>
    </View>
  );
}
