import {StyleSheet} from 'react-native';
import {styleContainer, colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  screenContainer: {
    ...styleContainer,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  name: {
    fontSize: 30,
    color: colors.light,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  logosContainer: {
    flexGrow: 0.2,
  },
  btnsContainer: {
    marginVertical: 20,
  },
});
