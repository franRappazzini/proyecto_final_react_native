import {Pressable, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {colors} from '../../../utils/constants/themes';
import {styles} from './styles';

export default function Sala({onPress, infoSala}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {backgroundColor: pressed ? colors.darkGrey : colors.dark},
        styles.salaContainer,
      ]}>
      <View>
        <Text style={styles.salaNombre}>Nombre de sala</Text>
        <Text style={styles.salaDescripcion}>Descripción de sala</Text>
      </View>

      <View style={styles.iconsContainer}>
        <Ionicons
          name="information-circle"
          color={colors.light}
          size={25}
          style={styles.iconInfo}
          onPress={infoSala}
        />
        <Ionicons
          name="heart"
          color={colors.purple}
          size={25}
          style={styles.iconHeart}
        />
      </View>
    </Pressable>
  );
}
