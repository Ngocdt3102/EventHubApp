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
    }
})
