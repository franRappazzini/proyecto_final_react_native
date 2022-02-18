import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  crearSalaContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  textError: {
    fontSize: 16,
    marginTop: 10,
    color: colors.light,
    textAlign: 'center',
  },
});
