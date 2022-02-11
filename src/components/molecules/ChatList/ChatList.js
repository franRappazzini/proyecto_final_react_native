import {Image, Pressable, Text, View} from 'react-native';

import React from 'react';
import {colors} from '../../../utils/constants/themes';
import {styles} from './styles';

export default function ChatList({onPress}) {
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
          <Text style={styles.usernameText}>username</Text>
          <Text style={styles.mensajeText}>Ultimo mensaje</Text>
        </View>

        <Text style={styles.fechaText}>10/02/2022, 15:21</Text>
      </View>
    </Pressable>
  );
}
