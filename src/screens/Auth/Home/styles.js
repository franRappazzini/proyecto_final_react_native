import {colors, styleContainer} from '../../../utils/constants/themes';

import {StyleSheet} from 'react-native';

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
