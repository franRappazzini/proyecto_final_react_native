import {Image, Pressable, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {colors} from '../../../utils/constants/themes';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function Usuarios({
  usuario,
  navigation,
  onPress,
  agregarFavorito,
  eliminarFavorito,
}) {
  const usersFav = useSelector(state => state.user.usersFav);
  const {username, nombre, apellido, avatar} = usuario;

  function verificarFav() {
    const userFind = usersFav.findIndex(user => user.username === username);

    if (userFind !== -1) {
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
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: pressed ? colors.darkGrey : 'transparent',
        },
        styles.chatListContainer,
      ]}>
      <Image
        style={styles.img}
        source={{
          uri: avatar,
        }}
      />

      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.usernameText}>{username}</Text>
          <Text style={styles.nombreText}>
            {nombre} {apellido}
          </Text>
        </View>

        <View style={styles.iconsContainer}>
          <Ionicons
            name="information-circle"
            size={25}
            color={colors.light}
            onPress={navigation}
            style={styles.iconInfo}
          />
          {/* <Ionicons
            name="heart"
            size={25}
            color={colors.purple}
            onPress={agregarFavorito}
            style={styles.iconHeart}
          /> */}
          {verificarFav()}
        </View>
      </View>
    </Pressable>
  );
}
