import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonComponent } from '../../components';
import { GlobalStyles } from '../../style/GlobalStyles';

const LoginScreen = () => {
  return (
    <View style={[GlobalStyles.container , {padding: 16 ,}]}>
      <Text>LoginScreen</Text>
      <ButtonComponent 
      type='primary' 
      text='LOGIN' 
      onPress={() => console.log('Login')} 
      icon={<View>
        <Text>N</Text>
      </View>}/>
    </View>
  );
};


export default LoginScreen;
