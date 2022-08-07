import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "./styles";

const ControlButton = ({ title, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <View style={styles.button_image}>
                <Image style={styles.image} source={image} />
            </View>
            <Text style={styles.button_text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ControlButton