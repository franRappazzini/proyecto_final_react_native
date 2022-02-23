import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';

import BtnCustom from '../../../components/atoms/BtnCustom/BtnCustom';
import LogoGroupChat from '../../../assets/svg/LogoGroupChat';
import LogoOnlineMessaging from '../../../assets/svg/LogoOnlineMessaging';
import {colors} from '../../../utils/constants/themes';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsers, getUser} from '../../../redux/actions/UserActions';
import {getUserLogIn} from '../../../utils/services/sql';

export default function HomeScreen({navigation}) {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  // console.log('users', users);

  getUserLogIn().then(user => {
    if (user[0]) {
      const findUser = users.find(u => u.username === user[0].username);
      dispatch(getUser(findUser));
      if (findUser) {
        navigation.navigate('Tab');
      }
    }
  });

  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={colors.dark} />

      <View style={styles.logosContainer}>
        <Text style={styles.name}>Purple Chat</Text>
        <LogoOnlineMessaging />

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
