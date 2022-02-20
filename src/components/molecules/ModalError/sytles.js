import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
    padding: 20,
    borderRadius: 10,
  },
  textError: {
    marginTop: 10,
    fontSize: 16,
    color: colors.light,
  },
});
