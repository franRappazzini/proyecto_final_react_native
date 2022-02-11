import {Image, Text, View} from 'react-native';

import React from 'react';
import {styleContainer} from '../../../utils/constants/themes';
import {styles} from './styles';

export default function InfoUsuariosScreen() {
  return (
    <View style={styleContainer}>
      <Image
        source={{
          uri: 'https://icdn.dtcn.com/image/digitaltrends_es/bored-ape-yacht-club-720x720.jpg',
        }}
        style={styles.img}
      />

      <Text style={styles.text}>USERNAME</Text>
      <Text style={styles.text}>Nombre Apellido</Text>
    </View>
  );
}
