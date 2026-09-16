import React from 'react';
import {ActivityIndicator, Image, ImageBackground} from 'react-native';
import {appInfors} from '../constants/appInfors';
import SpaceComponent from '../components/SpaceComponent';
import {colors} from '../constants/appColor';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      imageStyle={{flex: 1}}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: appInfors.sizes.WIDTH * 0.7,
          resizeMode: 'contain',
        }}
      />
      <SpaceComponent height={16} />
      <ActivityIndicator color={colors.gray} size={22} />
    </ImageBackground>
  );
};

export default SplashScreen;