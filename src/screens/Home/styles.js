import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { spacing } from "../../utils/spacing";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: spacing.screen,
        backgroundColor: colors.background,
        paddingVertical: hp(8)
    },
    logo_view: {
        width: wp(45),
        height: wp(45),
        marginVertical: hp(8),
        alignSelf: 'center'
    },
    mode_view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp(5)
    },
    exit_icon: {
        height: '100%',
        width: '100%'
    },
    exit_image_view: {
        height: wp(10),
        width: wp(10)
    },
    exit_text: {
        fontFamily: fonts.font_01,
        color: colors.black,
        fontSize: wp(7),
    },
    exit_button: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        height: hp(10),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderColor: colors.secondary_variant,
        borderWidth: wp(1),
        borderRadius: wp(4),
        padding: wp(2)
    }

})