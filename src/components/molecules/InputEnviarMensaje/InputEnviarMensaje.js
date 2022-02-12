import {Pressable, TextInput, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {colors} from '../../../utils/constants/themes';
import {styles} from './styles';

export default function InputEnviarMensaje({value, onChangeText, onPress}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Mensaje"
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />

      <Pressable
        onPress={onPress}
        style={({pressed}) => [{opacity: pressed ? 0.6 : 1}, styles.pressable]}>
        <Ionicons name="send" color={colors.light} size={20} />
      </Pressable>
    </View>
  );
}
