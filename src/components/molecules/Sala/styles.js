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
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  salaNombre: {
    fontSize: 20,
    color: colors.light,
    marginRight: 10,
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(47, 49, 54, 0.9)',
  },
  modalContainer: {
    width: '80%',
    alignSelf: 'center',
    flex: 0.3,

    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: colors.dark,
  },
});
