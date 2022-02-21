import {StyleSheet} from 'react-native';
import {styleContainer} from '../../../utils/constants/themes';

export const styles = StyleSheet.create({
  screenContainer: {...styleContainer, paddingHorizontal: 15},
  welcomeText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 16,
  },
  inputsContainer: {
    marginBottom: 15,
  },
});
