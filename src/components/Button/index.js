import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { colors } from '../../utils/colors';

const Button = ({ title, onPress, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button