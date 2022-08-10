import React from "react";
import { View, Modal, Image, Text } from "react-native";
import { styles } from "./styles";
import { displayTime } from "../../utils/time";
import ControlButton from "../ControlButton";
import { colors } from "../../utils/colors";

const win_1_icon = require('../../static/images/icons/win_1.png')
const win_2_icon = require('../../static/images/icons/win_2.png')
const sync_icon = require('../../static/images/icons/sync.png')
const exit_icon = require('../../static/images/icons/exit.png')


const WinDialogTwoPlayers = ({ visible, scoreOne, scoreTwo, handleReplay, handleExit }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.container}>
                    <View style={styles.win_icon_view}>
                        <Image style={styles.image} source={scoreOne > scoreTwo ? win_1_icon : win_2_icon} />
                    </View>
                    <Text style={styles.score}>
                        <Text style={{ color: colors.primary_variant }}>{scoreOne}</Text>/
                        <Text style={{ color: colors.secondary_variant }}>{scoreTwo}</Text>
                    </Text>
                    <Text style={styles.title}>Congratulations!!</Text>

                    <View style={styles.button_group}>
                        <ControlButton title={'Replay'} image={sync_icon} onPress={handleReplay} />
                        <ControlButton title={'Exit'} image={exit_icon} onPress={handleExit} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default WinDialogTwoPlayers