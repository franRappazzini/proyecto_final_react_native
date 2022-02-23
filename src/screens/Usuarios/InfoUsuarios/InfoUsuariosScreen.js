import {Image, Text, View} from 'react-native';

import React from 'react';
import {styleContainer} from '../../../utils/constants/themes';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function InfoUsuariosScreen() {
  const userChat = useSelector(state => state.user.userChat);
  const {nombre, apellido, username, avatar} = userChat;

  return (
    <View style={styleContainer}>
      <Image
        source={{
          uri: avatar,
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
