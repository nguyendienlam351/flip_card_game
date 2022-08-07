import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from "../../utils/colors";
import { spacing } from '../../utils/spacing';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: spacing.screen,
        backgroundColor: colors.background,
        paddingVertical: hp(5),
        justifyContent: 'space-between'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    top_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    pause_button: {
        width: wp(13),
        height: wp(13)
    }
})