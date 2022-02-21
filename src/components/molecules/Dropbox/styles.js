import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  dropboxContainer: {
    marginVertical: 10,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  favoritosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginRight: 5,
  },
});
