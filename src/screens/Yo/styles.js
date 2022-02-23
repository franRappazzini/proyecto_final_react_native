import {StyleSheet} from 'react-native';
import {colors} from '../../utils/constants/themes';

export const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  text: {textAlign: 'center', fontSize: 20, color: colors.light},
  btnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
