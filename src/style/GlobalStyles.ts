import { StyleSheet } from 'react-native';
import { colors } from '../constants/appColor';
import { fontFamilies } from '../constants/fontFamilies';
export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    text: {
        fontFamily: fontFamilies.regular,
        fontSize: 14,
        color: colors.text
    },
    button:{
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: 16 ,
        paddingVertical: 16 ,
        minHeight: 56,
        flexDirection: 'row'
    }
})
