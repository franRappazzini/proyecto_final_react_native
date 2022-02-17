import {Image, Text, View} from 'react-native';

import React from 'react';
import {styleContainer} from '../../../utils/constants/themes';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function InfoUsuariosScreen() {
  const userChat = useSelector(state => state.user.userChat);
  const {nombre, apellido, username} = userChat;

  return (
    <View style={styleContainer}>
      <Image
        source={{
          uri: 'https://icdn.dtcn.com/image/digitaltrends_es/bored-ape-yacht-club-720x720.jpg',
        }}
        style={styles.img}
      />

      <Text style={styles.text}>{username}</Text>
      <Text style={styles.text}>
        {nombre} {apellido}
      </Text>
    </View>
  );
}
