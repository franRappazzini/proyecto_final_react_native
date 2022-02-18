import {Pressable, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {colors} from '../../../utils/constants/themes';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function Sala({
  sala,
  onPress,
  infoSala,
  agregarFavorito,
  eliminarFavorito,
}) {
  const salasFav = useSelector(state => state.sala.salasFav);
  const {id, name, description} = sala;

  function verificarFav() {
    const salaFind = salasFav.findIndex(salaFav => salaFav.id === id);

    if (salaFind !== -1) {
      return (
        <Ionicons
          name="close-circle"
          size={25}
          color={colors.red}
          onPress={eliminarFavorito}
          style={styles.iconHeart}
        />
      );
    } else {
      return (
        <Ionicons
          name="heart"
          size={25}
          color={colors.purple}
          onPress={agregarFavorito}
          style={styles.iconHeart}
        />
      );
    }
  }

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {backgroundColor: pressed ? colors.darkGrey : colors.dark},
        styles.salaContainer,
      ]}>
      <View>
        <Text style={styles.salaNombre}>{name}</Text>
        <Text style={styles.salaDescripcion}>{description}</Text>
      </View>

      <View style={styles.iconsContainer}>
        <Ionicons
          name="information-circle"
          color={colors.light}
          size={25}
          style={styles.iconInfo}
          onPress={infoSala}
        />
        {verificarFav()}
      </View>
    </Pressable>
  );
}
