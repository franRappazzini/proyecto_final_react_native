import {Image, Pressable, Text, View} from 'react-native';

import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function MensajeSala({mensaje, onLongPress}) {
  // crear function para saber de quien es el mensaje (probar si dejarlo asi o cambiar los styles)
  const user = useSelector(state => state.user.user);
  const {username, message, day, hour} = mensaje;

  function validarMensaje() {
    if (username === user.username) {
      return styles.miMensajeContainer;
    } else {
      return styles.mensajeContainer;
    }
  }

  return (
    <Pressable
      onLongPress={onLongPress}
      style={({pressed}) => [{opacity: pressed ? 0.6 : 1}, validarMensaje()]}>
      <Image
        source={{
          uri: 'https://icdn.dtcn.com/image/digitaltrends_es/bored-ape-yacht-club-720x720.jpg',
        }}
        style={styles.img}
      />

      <View>
        <View style={styles.infoContainer}>
          <Text style={styles.usernameText}>{username}</Text>

          <Text style={styles.fechaText}>
            {day}, {hour}
          </Text>
        </View>

        <Text style={styles.mensajeText}>{message}</Text>
      </View>
    </Pressable>
  );
}
