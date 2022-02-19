import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BtnCustom from '../../atoms/BtnCustom/BtnCustom';
import {colors} from '../../../utils/constants/themes';

export default function Dropbox({children, text, onPress, btnVisible}) {
  const [isOpen, setIsOpen] = useState(false);
  const btnCrearSala = btnVisible ? btnVisible : false;

  return (
    <Pressable
      onPress={() => setIsOpen(!isOpen)}
      style={styles.dropboxContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.favoritosContainer}>
          <Text style={styles.textTitle}>{text}</Text>
          <Ionicons name={isOpen ? 'chevron-down' : 'chevron-up'} size={20} />
        </View>

        <View style={{display: btnCrearSala ? 'flex' : 'none'}}>
          <BtnCustom
            text="Crear sala"
            color={colors.purple}
            onPress={onPress}
          />
        </View>
      </View>

      <View style={{display: isOpen ? 'flex' : 'none'}}>{children}</View>
    </Pressable>
  );
}
