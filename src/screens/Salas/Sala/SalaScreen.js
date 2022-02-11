import {Text, View} from 'react-native';

import MensajeSala from '../../../components/molecules/MensajeSala/MensajeSala';
import React from 'react';
import {styleContainer} from '../../../utils/constants/themes';

export default function SalaScreen({navigation}) {
  return (
    <View style={styleContainer}>
      <Text>SalaScreen</Text>

      <MensajeSala
        onLongPress={() => navigation.navigate('MensajeDetalleSalaScreen')}
      />
    </View>
  );
}
