import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  salaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: colors.darkGrey,
    borderBottomWidth: 1,
  },
  salaNombre: {
    fontSize: 20,
    color: colors.light,
  },
  salaDescripcion: {
    fontWeight: '300',
    color: colors.light,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconInfo: {marginRight: 5},
  iconHeart: {marginLeft: 5},
});
