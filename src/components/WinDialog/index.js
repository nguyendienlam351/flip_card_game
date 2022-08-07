import React from "react";
import { View, Modal, Image, Text } from "react-native";
import { styles } from "./styles";
import { displayTime } from "../../utils/time";
import ControlButton from "../ControlButton";

const win_icon = require('../../static/images/icons/win.png')
const sync_icon = require('../../static/images/icons/sync.png')
const exit_icon = require('../../static/images/icons/exit.png')


const WinDialog = ({ visible, time, handleReplay, handleExit }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.container}>
                    <View style={styles.win_icon_view}>
                        <Image style={styles.image} source={win_icon} />
                    </View>
                    <Text style={styles.title}>{displayTime(time)}</Text>
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

export default WinDialog