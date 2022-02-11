import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  mensajeContainer: {
    padding: 10,
    backgroundColor: colors.grey,
    borderRadius: 15,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 3,
    marginRight: 100,
  },
  img: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 25,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  usernameText: {color: colors.light, fontSize: 16, fontWeight: '500'},
  fechaText: {color: colors.light, fontSize: 12, fontWeight: '300'},
  mensajeText: {color: colors.light, fontSize: 16},

  miMensajeContainer: {
    padding: 10,
    backgroundColor: colors.purple,
    borderRadius: 15,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginBottom: 3,
    marginLeft: 100,
  },
  miImg: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 25,
  },
  miInfoContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  miMensajeText: {color: colors.light, fontSize: 16, textAlign: 'justify'},
});
