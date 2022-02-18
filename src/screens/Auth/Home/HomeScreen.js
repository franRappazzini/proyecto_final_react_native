import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import LogoGroupChat from '../../../assets/svg/LogoGroupChat';
import LogoOnlineChat from '../../../assets/svg/LogoOnlineChat';
import LogoOnlineMessaging from '../../../assets/svg/LogoOnlineMessaging';
import {colors} from '../../../utils/constants/themes';
import {getAllUsers} from '../../../redux/actions/UserActions';
import {styles} from './styles';
import {useDispatch} from 'react-redux';

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <View style={styles.screenContainer}>
      {/* <Text style={{fontSize: 20, color: colors.light, textAlign: 'center'}}>
        Bienvenido a msnapp
      </Text> */}

      <View style={styles.logosContainer}>
        <Text
          style={{
            fontSize: 20,
            color: colors.light,
            textAlign: 'center',
            marginBottom: 10,
          }}>
          Bienvenido a msnapp
        </Text>
        <LogoOnlineMessaging />

        <LogoOnlineChat />

        <LogoGroupChat />
      </View>

      <View style={styles.btnsContainer}>
        <BtnCustom
          text="Registrarse"
          color={colors.purple}
          onPress={() => navigation.navigate('CrearUserScreen')}
        />

        <BtnCustom
          text="Iniciar sesion"
          color={colors.lightGrey}
          onPress={() => navigation.navigate('IniciarSesionScreen')}
        />
      </View>
    </View>
  );
}
