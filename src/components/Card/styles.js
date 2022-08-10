import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    flipCard: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'hidden'
    },
    flipCardFront: {
        backgroundColor: colors.secondary_variant,
        borderColor: colors.primary,
        borderWidth: wp(1)
    },
    flipCardBack: {
        backgroundColor: colors.white,
        borderColor: colors.primary_variant,
        borderWidth: wp(1),
        position: "absolute",
        top: 0,
    }
});