import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  chatListContainer: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  usernameText: {color: colors.light, fontSize: 18, fontWeight: '500'},
  nombreText: {color: colors.light, fontSize: 14, fontWeight: '300'},
  fechaText: {color: colors.light, fontSize: 12, fontWeight: '300'},
  iconsContainer: {
    flexDirection: 'row',
  },
  iconInfo: {marginRight: 5},
  iconHeart: {marginLeft: 5},
});
