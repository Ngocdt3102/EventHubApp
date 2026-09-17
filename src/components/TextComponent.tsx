import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import { colors } from '../constants/appColor';
import { GlobalStyles } from '../style/GlobalStyles';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    text? : string ;
    color? : string ;
    size? : number ;
    flex? : number ;
    font? : string ;
    styles? : StyleProp<TextStyle>;
    title? : boolean;
}

const TextComponent = (props : Props) => {
    const {text,color,size,flex,font,styles,title} = props ;
    return <Text style={[
        GlobalStyles.text,
        {
            color: color ?? colors.text,
            fontSize: size ?? title ? 24 : 14 ,
            flex: flex ?? 0,
            fontFamily: font ?? title ? fontFamilies.bold : fontFamilies.regular
        },
        styles
    ]}>{text}</Text>;
};

export default TextComponent;