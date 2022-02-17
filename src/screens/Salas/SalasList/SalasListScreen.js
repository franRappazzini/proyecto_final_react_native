import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {getSalas, getUniqueSala} from '../../../redux/actions/SalaAction';
import {useDispatch, useSelector} from 'react-redux';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sala from '../../../components/molecules/Sala/Sala';
import {sytles} from './styles';

export default function SalasListScreen({navigation}) {
  const salas = useSelector(state => state.sala.salas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSalas());
  }, [dispatch]);

  return (
    <View style={styleContainer}>
      <View style={sytles.crearSalaContainer}>
        {/* <BtnCustom
          text="Crear sala"
          color={colors.purple}
          onPress={() => navigation.navigate('CrearSalaNav')}
        /> */}
        <BtnCustom
          text={<Ionicons name="add" color={colors.light} size={30} />}
          color={colors.purple}
          onPress={() => navigation.navigate('CrearSalaNav')}
        />
      </View>

      <FlatList
        data={salas}
        renderItem={({item}) => (
          <Sala
            sala={item}
            onPress={() => {
              dispatch(getUniqueSala(item));
              navigation.navigate('SalasNav');
            }}
            infoSala={() => navigation.navigate('InfoSalaNav', {sala: item})}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
