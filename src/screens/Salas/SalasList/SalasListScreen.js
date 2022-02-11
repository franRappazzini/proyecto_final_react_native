import {colors, styleContainer} from '../../../utils/constants/themes';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Sala from '../../../components/molecules/Sala/Sala';
import {View} from 'react-native';
import {sytles} from './styles';

export default function SalasListScreen({navigation}) {
  // ver como hacer que me mande a la pantalla de detalles de la sala

  return (
    <View style={styleContainer}>
      <Sala
        onPress={() => navigation.navigate('SalasNav')}
        infoSala={() => navigation.navigate('InfoSalaNav')}
      />
      <Sala />
      <Sala />
      <Sala />
      <Sala />

      <View style={sytles.crearSalaContainer}>
        <BtnCustom
          text="Crear sala"
          color={colors.purple}
          onPress={() => navigation.navigate('CrearSalaNav')}
        />
        <BtnCustom
          text={<Ionicons name="add" color={colors.light} size={30} />}
          color={colors.purple}
          onPress={() => navigation.navigate('CrearSalaNav')}
        />
      </View>
    </View>
  );
}
