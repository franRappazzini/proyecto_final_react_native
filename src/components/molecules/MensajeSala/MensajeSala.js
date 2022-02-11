import {Image, Pressable, Text, View} from 'react-native';

import React from 'react';
import {styles} from './styles';

export default function MensajeSala({onLongPress}) {
  // crear function para saber de quien es el mensaje (probar si dejarlo asi o cambiar los styles)

  return (
    <Pressable
      onLongPress={onLongPress}
      style={({pressed}) => [
        {opacity: pressed ? 0.6 : 1},
        styles.mensajeContainer,
      ]}>
      <Image
        source={{
          uri: 'https://icdn.dtcn.com/image/digitaltrends_es/bored-ape-yacht-club-720x720.jpg',
        }}
        style={styles.img}
      />

      <View>
        <View style={styles.infoContainer}>
          <Text style={styles.usernameText}>Username</Text>

          <Text style={styles.fechaText}>10/02/2022, 19:14</Text>
        </View>

        <Text style={styles.mensajeText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Text>
      </View>
    </Pressable>
  );
}
