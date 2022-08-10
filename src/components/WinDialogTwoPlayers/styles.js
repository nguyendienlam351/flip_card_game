import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from "../../utils/fonts";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    container: {
        width: wp(80),
        backgroundColor: colors.background,
        borderColor: colors.black,
        borderWidth: wp(1),
        borderRadius: wp(4),
        paddingHorizontal: wp(4),
        paddingVertical: hp(4)
    },
    win_icon_view: {
        height: wp(25),
        width: wp(25),
        alignSelf: 'center'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    title: {
        fontFamily: fonts.font_01,
        color: colors.black,
        fontSize: wp(6),
        textAlign: 'center'
    },
    score: {
        fontFamily: fonts.font_01,
        color: colors.black,
        fontSize: wp(8),
        textAlign: 'center'
    },
    button_group: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: hp(5)
    }
})