import React from "react";
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './styles';

const ModeButton = ({ title, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.mode_button} onPress={onPress}>
            <View style={styles.mode_icon_view}>
                <Image style={styles.mode_icon} source={image} />
            </View>
            <Text style={styles.mode_text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ModeButton