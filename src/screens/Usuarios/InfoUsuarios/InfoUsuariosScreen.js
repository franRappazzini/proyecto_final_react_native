import {Image, Text, View} from 'react-native';

import React from 'react';
import {styleContainer} from '../../../utils/constants/themes';
import {styles} from './styles';

export default function InfoUsuariosScreen({route}) {
  const {nombre, apellido, username} = route.params;

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
