import {Pressable, Text} from 'react-native';

import React from 'react';
import {styles} from './styles';

export default function BtnCustom({text, color, onPress, onLongPress}) {
  return (
    <Pressable
      style={({pressed}) => [
        {opacity: pressed ? 0.6 : 1, backgroundColor: color},
        styles.pressable,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}
