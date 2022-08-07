import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    mode_icon_view: {
        height: wp(20),
        width: wp(20)
    },
    mode_icon: {
        height: '100%',
        width: '100%'
    },
    mode_button: {
        backgroundColor: colors.secondary_variant,
        height: hp(28),
        width: wp(40),
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: colors.primary,
        borderWidth: wp(1),
        borderRadius: wp(4),
        padding: wp(2)
    },
    mode_text: {
        fontFamily: fonts.font_01,
        color: colors.black,
        fontSize: wp(5),
        textAlign: 'center'
    }
})