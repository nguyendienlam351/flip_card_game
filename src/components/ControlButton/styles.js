import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%'
    },
    button: {
        backgroundColor: colors.secondary,
        borderColor: colors.primary_variant,
        borderWidth: wp(1),
        borderRadius: wp(4),
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(12),
        width: wp(22)
    },
    button_image: {
        width: wp(10),
        height: wp(10)
    },
    button_text: {
        fontFamily: fonts.font_01,
        color: colors.black,
        fontSize: wp(4),
        textAlign: 'center'
    }
})