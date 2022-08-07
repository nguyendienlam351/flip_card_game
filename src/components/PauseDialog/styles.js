import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
    image: {
        height: '100%',
        width: '100%'
    },
    button_group: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})