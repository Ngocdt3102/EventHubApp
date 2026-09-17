import { View, Text, Image, TouchableOpacity ,StyleSheet} from 'react-native';
import React, { useState } from 'react';
import { GlobalStyles } from '../../style/GlobalStyles';
import Swiper from 'react-native-swiper';
import { appInfors } from '../../constants/appInfors';
import { colors } from '../../constants/appColor';
import { TextComponent } from '../../components';
import { fontFamilies } from '../../constants/fontFamilies';


const OnboardingScreen = ({navigation} : any) => {
  const [index , setIndex] = useState(0)
  return (
    <View style={[GlobalStyles.container]}>
      <Swiper style={{}} loop={false} onIndexChanged={num => setIndex(num)} index={index} activeDotColor={colors.white} dotColor={colors.gray}>
        <Image source={require('../../assets/images/onboarding-1.png')} style={{ width: appInfors.sizes.WIDTH, height: appInfors.sizes.HEIGHT ,flex: 1}} resizeMode="cover" />
        <Image source={require('../../assets/images/onboarding-2.png')} style={{ width: appInfors.sizes.WIDTH, height: appInfors.sizes.HEIGHT ,flex: 1}} resizeMode="cover" />
        <Image source={require('../../assets/images/onboarding-3.png')} style={{ width: appInfors.sizes.WIDTH, height: appInfors.sizes.HEIGHT ,flex: 1}} resizeMode="cover" />
      </Swiper>
      <View style={[{
        paddingHorizontal: 16,
        paddingVertical: 12,
        position: 'absolute',
        bottom: 0 ,
        right: 0 , 
        left: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }]}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}><TextComponent text='Skip' color='#000' size={20} font={fontFamilies.medium} styles={[styles.text]}/></TouchableOpacity>
        <TouchableOpacity onPress={() => index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}><TextComponent title text='Next' color={colors.white} size={20} font={fontFamilies.medium} styles={[styles.text]}/></TouchableOpacity>
      </View>
    </View>
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  text: {
    bottom: 10
  }
})