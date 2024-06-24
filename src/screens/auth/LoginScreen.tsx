import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles/globalStyles';
import {ButtonComponent, InputComponent} from '../components';
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');

  return (
    <View
      style={[
        globalStyles.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        },
      ]}>
      <InputComponent
        value={email}
        onChange={val => setEmail(val)}
        placeholder="Nhap email"
        affix={<Sms size={22} color={appColors.gray} />}
      />
      <InputComponent
        value={passWord}
        onChange={val => setPassWord(val)}
        placeholder="Nhap PassWord"
        isPassword
        affix={<Lock size={22} color={appColors.gray} />}
      />
    </View>
  );
};

export default LoginScreen;
