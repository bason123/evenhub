import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {globalStyles} from '../../styles/globalStyles';
import {ButtonComponent} from '../components';

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container, {padding: 16,}]}>
      <Text>LoginScreen</Text>
      {/* <Button
        title="Login"
        onPress={async () =>
          await AsyncStorage.setItem('assetToken', 'fadafsdf')
        }
      /> */}
      <ButtonComponent
        text="LOGIN"
        onPress={() => console.log('Login')}
        icon={
          <View>
            <Text>M</Text>
          </View>
        }
      />
    </View>
  );
};

export default LoginScreen;
