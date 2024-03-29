import {StyleSheet} from 'react-native';
import {styleContainer} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  chatContainer: {
    ...styleContainer,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    height: '100%',
  },
  textNoMensajes: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});
