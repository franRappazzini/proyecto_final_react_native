import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './styles';

export default function TextInputCustom({
  placeholder,
  type,
  value,
  onChangeText,
  autoCapitalize,
  autoFocus,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      placeholderTextColor={'#b0b2b5'}
      keyboardType={type}
      autoCapitalize={autoCapitalize}
      value={value}
      onChangeText={onChangeText}
      autoFocus={autoFocus}
    />
  );
}
