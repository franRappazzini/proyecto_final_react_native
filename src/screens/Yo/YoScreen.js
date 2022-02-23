import {View, Text, Image} from 'react-native';
import React from 'react';
import {styleContainer} from '../../utils/constants/themes';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export default function YoScreen() {
  const user = useSelector(state => state.user.user);
  const {nombre, apellido, username, email, avatar} = user;

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
      <Text style={styles.text}>{email}</Text>
    </View>
  );
}
