import {StyleSheet} from 'react-native';
import {styleContainer} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  screenContainer: {
    ...styleContainer,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  logosContainer: {
    flexGrow: 0.2,
  },
  btnsContainer: {
    marginVertical: 20,
  },
});
