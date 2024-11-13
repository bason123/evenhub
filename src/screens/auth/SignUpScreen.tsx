import {View, Text, Button, Image, Switch} from 'react-native';
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
import {Lock, Sms, User} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import SocialLogin from './Components/SocialLogin';

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpScreen = ({navigation}: any) => {
  const [values, setValues] = useState(initValue);

  const handleChangeValue = (key: string, value: string) =>{
    const data: any = {...values};

    data[`${key}`] = value;

    setValues(data);
  }

  return (
    <ContainerComponent isImageBackground isScroll back>
      <SectionComponent>
        <TextComponent size={24} title text="Sign up" />
        <SpaceComponent height={21} />
        <InputComponent
          value={values.username}
          onChange={val => handleChangeValue('username', val)}
          placeholder="Full name"
          allowClear
          affix={<User size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.email}
          onChange={val => handleChangeValue('email', val)}
          placeholder="email"
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.password}
          onChange={val => handleChangeValue('password', val)}
          placeholder="Nhap PassWord"
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.confirmPassword}
          onChange={val => handleChangeValue('confirmPassword', val)}
          placeholder="Nhap confirmPassword"
          isPassword
          allowClear
          affix={<Lock size={22} color={appColors.gray} />}
        />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text="SIGN UP" type="primary" />
      </SectionComponent>
      <SocialLogin/>
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent text="Don’t have an account? " />
          <ButtonComponent type="link" text="Sign in" onPress={() => {navigation.navigate('LoginScreen')} } />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
