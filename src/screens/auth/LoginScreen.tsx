import {View, Text, Button, Image, Switch, Alert} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles/globalStyles';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import SocialLogin from './Components/SocialLogin';
import ForgotPassword from './ForgotPassword';
import authenticationAPI from '../../apis/authApi';
import {Validate} from '../../utils/validate';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/reducers/authReducer';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const emailValidation = Validate.email(email);

    if (emailValidation) {
      try {
        const res = await authenticationAPI.HanleAuthentication(
          '/login',
          {email, password},
          'post',
        );
        dispatch(addAuth(res.data));

        await AsyncStorage.setItem(
          'auth',
          isRemember ? JSON.stringify(res.data) : email,
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Email is not correct!!!');
    }
  };

  return (
    <ContainerComponent isImageBackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{width: 162, height: 114}}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent size={24} title text="Sign in" />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          onChange={val => setEmail(val)}
          placeholder="Nhap email"
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={password}
          onChange={val => setPassWord(val)}
          placeholder="Nhap PassWord"
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              value={isRemember}
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.white}
              onChange={() => setIsRemember(!isRemember)}
            />
            <SpaceComponent width={4} />
            <TextComponent text="Remember me" />
          </RowComponent>
          <ButtonComponent
            text="Forgot Password?"
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}
            type="text"
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent onPress={handleLogin} text="SIGN IN" type="primary" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don’t have an account? " />
          <ButtonComponent
            type="link"
            text="Sign up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
