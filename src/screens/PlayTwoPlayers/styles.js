import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";
import { spacing } from '../../utils/spacing';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'space-between',
        paddingHorizontal: spacing.screen,
        paddingVertical: hp(5),
    },
    top_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: hp(.5)
    },
    image: {
        width: '100%',
        height: '100%'
    },
    pause_button: {
        width: wp(11.5),
        height: wp(11.5)
    },
    score_view: {
        width: wp(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.black,
        borderWidth: wp(1),
        borderRadius: wp(4),
    },
    score_player_one: {
        backgroundColor: colors.primary_variant
    },
    score_player_two: {
        backgroundColor: colors.secondary_variant
    },
    blur_view: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: wp(28),
        height: '100%',
        position: 'absolute',
        borderRadius: wp(3),
    },
    text: {
        fontFamily: fonts.font_01,
        color: colors.black,
        fontSize: wp(6),
        padding: wp(1.5)
    }
})