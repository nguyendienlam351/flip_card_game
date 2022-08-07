import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from "../../utils/fonts";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        width: wp(30),
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: colors.black,
        borderWidth: wp(1),
        borderRadius: wp(4),
        padding: wp(2)
    },
    time: {
        fontFamily: fonts.font_01,
        color: colors.black,
        fontSize: wp(6),
        textAlign: 'center'
    }
})