import React from "react";
import { View, Modal, Text } from "react-native";
import { styles } from "./styles";
import Button from "../Button";

const Dialog = ({ visible, setVisible, handleYes, handleNo }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(preVisible => !preVisible)
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.container}>
                    <Text style={styles.title}>Do you want to exit?</Text>
                    <View style={styles.button_view}>
                        <Button title="No" buttonStyle={styles.no_button} onPress={handleNo} />
                        <Button title="Yes" onPress={handleYes} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Dialog