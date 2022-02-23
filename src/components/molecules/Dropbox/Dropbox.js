import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BtnCustom from '../../atoms/BtnCustom/BtnCustom';
import {colors} from '../../../utils/constants/themes';

export default function Dropbox({
  children,
  text,
  onPress,
  btnVisible,
  btnText,
  iconName,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Pressable
      onPress={() => setIsOpen(!isOpen)}
      style={styles.dropboxContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.favoritosContainer}>
          <Text style={styles.textTitle}>{text}</Text>
          <Ionicons name={isOpen ? 'chevron-down' : 'chevron-up'} size={20} />
        </View>

        <View>
          {btnText && (
            <BtnCustom text={btnText} color={colors.purple} onPress={onPress} />
          )}
          {iconName && (
            <Ionicons
              name={iconName}
              size={30}
              color={colors.light}
              onPress={onPress}
            />
          )}
        </View>
      </View>

      <View style={{display: isOpen ? 'flex' : 'none'}}>{children}</View>
    </Pressable>
  );
}
