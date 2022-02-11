import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  pressable: {
    borderRadius: 5,
    marginVertical: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.light,
    padding: 12,
    textAlign: 'center',
  },
});
