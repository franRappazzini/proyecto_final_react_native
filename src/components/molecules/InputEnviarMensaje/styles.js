import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.grey,
    borderRadius: 25,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 5,
  },
  pressable: {
    backgroundColor: colors.purple,
    borderRadius: 25,
    padding: 12,
  },
});
