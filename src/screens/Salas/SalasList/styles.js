import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  inputContainer: {marginTop: 10, paddingHorizontal: 15},
  textError: {
    fontSize: 16,
    marginTop: 10,
    color: colors.light,
    textAlign: 'center',
  },
  textNoFav: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
    paddingHorizontal: 15,
  },
});
