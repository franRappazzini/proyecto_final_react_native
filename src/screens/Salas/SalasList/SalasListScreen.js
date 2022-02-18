import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  addSalaToFav,
  getSalas,
  getUniqueSala,
  removeSalaFromFav,
} from '../../../redux/actions/SalaAction';
import {colors, styleContainer} from '../../../utils/constants/themes';
import {useDispatch, useSelector} from 'react-redux';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sala from '../../../components/molecules/Sala/Sala';
import TextInputCustom from '../../../components/atoms/TextInputCustom/TextInputCustom';
import {styles} from './styles';

export default function SalasListScreen({navigation}) {
  const [busqueda, setBusqueda] = useState('');
  const salas = useSelector(state => state.sala.salas);
  const salasFav = useSelector(state => state.sala.salasFav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSalas());
  }, [dispatch]);

  const busquedaSala =
    busqueda.trim() !== ''
      ? salas.filter(
          sala =>
            sala.name.toLowerCase().includes(busqueda.toLowerCase()) ||
            sala.createdBy.toLowerCase().includes(busqueda.toLowerCase()) ||
            sala.description.toLowerCase().includes(busqueda.toLowerCase()),
        )
      : salas;

  return (
    <View style={styleContainer}>
      <View style={styles.crearSalaContainer}>
        <BtnCustom
          text={<Ionicons name="add" color={colors.light} size={30} />}
          color={colors.purple}
          onPress={() => navigation.navigate('CrearSalaNav')}
        />
      </View>

      <View>
        <TextInputCustom
          placeholder="Buscar salas"
          value={busqueda}
          onChangeText={setBusqueda}
          autoCapitalize="none"
        />
      </View>

      {salasFav && salasFav.length > 0 && (
        <FlatList
          data={salasFav}
          renderItem={({item}) => (
            <Sala
              sala={item}
              onPress={() => {
                dispatch(getUniqueSala(item));
                navigation.navigate('SalasNav');
              }}
              infoSala={() => {
                dispatch(getUniqueSala(item));
                navigation.navigate('InfoSalaNav');
              }}
              eliminarFavorito={() => dispatch(removeSalaFromFav(item))}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}

      {busquedaSala && busquedaSala.length > 0 ? (
        <FlatList
          data={busquedaSala}
          renderItem={({item}) => (
            <Sala
              sala={item}
              onPress={() => {
                dispatch(getUniqueSala(item));
                navigation.navigate('SalasNav');
              }}
              infoSala={() => {
                dispatch(getUniqueSala(item));
                navigation.navigate('InfoSalaNav');
              }}
              agregarFavorito={() => dispatch(addSalaToFav(item))}
              eliminarFavorito={() => dispatch(removeSalaFromFav(item))}
            />
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text style={styles.textError}>Su busqueda no produjo resultados</Text>
      )}
    </View>
  );
}
