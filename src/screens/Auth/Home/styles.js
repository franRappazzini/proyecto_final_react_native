import {StyleSheet} from 'react-native';
import {styleContainer} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  screenContainer: {
    ...styleContainer,
    justifyContent: 'space-between',
  },
  logosContainer: {
    // flexDirection: 'row',
    flexGrow: 0.2,
  },
  btnsContainer: {
    marginVertical: 10,
  },
});
