import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { displayTime } from "../../utils/time";

const Timer = ({ time, setTime, pause }) => {
    var timer

    useEffect(() => {
        if (!pause) {
            timer = setInterval(() => {
                setTime(preTime => preTime + 1)
            }, 1000)
        }

        return () => clearInterval(timer)
    }, [pause])

    return (
        <View style={styles.container}>
            <Text style={styles.time}>{displayTime(time)}</Text>
        </View>
    )
}

export default Timer