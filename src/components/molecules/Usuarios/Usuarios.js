import {Image, Pressable, Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {colors} from '../../../utils/constants/themes';
import {styles} from './styles';

export default function Usuarios({
  username,
  nombre,
  apellido,
  navigation,
  onPress,
}) {
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
          uri: 'https://icdn.dtcn.com/image/digitaltrends_es/bored-ape-yacht-club-720x720.jpg',
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
          <Ionicons
            name="heart"
            size={25}
            color={colors.purple}
            onPress={() => {}}
            style={styles.iconHeart}
          />
        </View>
      </View>
    </Pressable>
  );
}
