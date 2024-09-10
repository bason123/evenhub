import {View, Text, ScrollView, ImageBackground} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
}

const ContainerComponent = (props: Props) => {
  const {isImageBackground, isScroll, title, children} = props;

  const returnContainer = isScroll ? (
    <ScrollView style={{flex: 1}}>{children}</ScrollView>
  ) : (
    <View style={{flex: 1}}>{children}</View>
  );
  return isImageBackground ? (
    <ImageBackground
      source={require('../assets/images/splash-image.png')}
      style={{flex: 1}}
      imageStyle={{flex: 1}}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>{returnContainer}</SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  ) : (
    <SafeAreaProvider>
      <SafeAreaView style={[globalStyles.container]}>
        <View>{returnContainer}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ContainerComponent;
