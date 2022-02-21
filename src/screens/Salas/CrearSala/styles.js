import {StyleSheet} from 'react-native';
import {colors, styleContainer} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  screenContainer: {
    ...styleContainer,
    paddingHorizontal: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textSwtich: {
    fontSize: 16,
    color: colors.light,
  },
  crearSalaContainer: {
    marginVertical: 10,
  },
});
