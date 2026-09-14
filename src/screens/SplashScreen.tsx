import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import text_logo from '../assets/images/logo.png';
import splash_01 from '../assets/images/Ellipse-69.png';
import splash_02 from '../assets/images/Ellipse-70.png';
import splash_03 from '../assets/images/Ellipse-71.png';
import { colors } from '../constants/appColor';
import SpaceComponent from '../components/SpaceComponent';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={text_logo} style={styles.image_logo} resizeMode="contain" />
      <SpaceComponent height={20} />
      <ActivityIndicator color={colors.gray} size={22} style={styles.ActivityIndicator} />
      <Image source={splash_01} style={styles.image_spl01} resizeMode="contain" />
      <Image source={splash_02} style={styles.image_spl02} resizeMode="contain" />
      <Image source={splash_03} style={styles.image_spl03} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 812,
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  image_logo: {
    width: 242,
    height: 58,
    position: 'absolute',
    top: '40%',
    left: '18%',
  },
  image_spl01: {
    width: 227,
    height: 209,
    position: 'absolute',
    top: -21  ,
    right: -30,
  },
  image_spl02: {
    position: 'absolute',
    top: 490,
    left: 130,
    width: 349,
    height: 322,
    transform: [{ rotate: '0deg' }],
  },
  image_spl03: {
    position: 'absolute',
    left: -70,
    bottom: 0,
    width: 166,
    height: 153,
    transform: [{ rotate: '45deg' }],
  },
  ActivityIndicator: {
    position: 'absolute',
    top: '50%',
    left: '48%',
  },
});

export default SplashScreen;
