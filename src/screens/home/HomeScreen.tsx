import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, removeAuth } from '../../redux/reducers/authReducer'

const HomeScreen = () => {
  const dispatch = useDispatch();

  const auth = useSelector(authSelector);
  

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>HomeScreen</Text>
      <Button title='out' onPress={async () => {
        // await AsyncStorage.setItem('auth', auth.emai)
        dispatch(removeAuth({}))}}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})