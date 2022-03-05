import React from 'react';
import {TextInput} from 'react-native';
import {styles} from '../TextInputCustom/styles';

export default function TextInputPassword({
  placeholder,
  value,
  onChangeText,
  autoFocus,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      placeholderTextColor={'#b0b2b5'}
      value={value}
      onChangeText={onChangeText}
      autoFocus={autoFocus}
      autoComplete="password"
      secureTextEntry
    />
  );
}
