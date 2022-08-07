import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(5),
        paddingVertical: hp(1.5),
        borderRadius: wp(2),
        borderWidth: wp(1),
        backgroundColor: colors.primary,
        borderColor: colors.black,
    },
    title: {
        textAlign: 'center',
        fontSize: wp(5),
        color: colors.black,
        fontFamily: fonts.font_01,
    }
})