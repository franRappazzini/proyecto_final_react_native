import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  mensajeContainer: {
    padding: 10,
    backgroundColor: colors.grey,
    borderRadius: 15,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginRight: 100,
    marginBottom: 3,
    marginLeft: 15,
  },
  miMensajeContainer: {
    padding: 10,
    backgroundColor: colors.purple,
    borderRadius: 15,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginLeft: 100,
    marginBottom: 3,
    marginRight: 15,
  },
  mensajeText: {
    fontSize: 16,
    color: colors.light,
    marginRight: 10,
  },
  horaText: {
    fontSize: 12,
    fontWeight: '300',
    textAlignVertical: 'bottom',
  },
});
