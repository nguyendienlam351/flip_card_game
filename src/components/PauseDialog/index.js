import React from "react";
import { View, Modal } from "react-native";
import { styles } from "./styles";
import ControlButton from "../ControlButton";

const play_icon = require('../../static/images/icons/play-button.png')
const sync_icon = require('../../static/images/icons/sync.png')
const exit_icon = require('../../static/images/icons/exit.png')


const WinDialog = ({ visible, handleContinue, handleReplay, handleExit }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.container}>
                    <View style={styles.button_group}>
                        <ControlButton title={'Continue'} image={play_icon} onPress={handleContinue} />
                        <ControlButton title={'Replay'} image={sync_icon} onPress={handleReplay} />
                        <ControlButton title={'Exit'} image={exit_icon} onPress={handleExit} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default WinDialog