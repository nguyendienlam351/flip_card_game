import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, Text, Image, View, BackHandler } from "react-native";
import { styles } from "./styles";
import ModeButton from '../../components/ModeButton';
import Dialog from "../../components/Dialog";

const one_player_icon = require('../../static/images/icons/one-player.png')
const two_players_icon = require('../../static/images/icons/two-players.png')
const exit_icon = require('../../static/images/icons/exit.png')
const logo_icon = require('../../static/images/icons/logo.png')

const Home = ({ navigation }) => {
    const [exitDialog, setExitDialog] = useState(false)


    const handleExit = () => {
        setExitDialog(preValue => !preValue)
        return true
    }

    const handleCloseApp = () => {
        BackHandler.exitApp()
    }

    const handleOnePlayer = () => {
        navigation.navigate('PlayOnePlayer')
    }

    useEffect(() => {

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            handleExit
        );

        return () => backHandler.remove();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_view}>
                <Image style={styles.exit_icon} source={logo_icon} />
            </View>
            <View style={styles.mode_view}>
                <ModeButton title='One Player' image={one_player_icon}
                    onPress={handleOnePlayer} />
                <ModeButton title='Two Players' image={two_players_icon}
                    onPress={() => { }} />
            </View>
            <TouchableOpacity style={styles.exit_button} onPress={handleExit}>
                <Text style={styles.exit_text}>Exit</Text>
                <View style={styles.exit_image_view}>
                    <Image style={styles.exit_icon} source={exit_icon} />
                </View>
            </TouchableOpacity>
            <Dialog
                visible={exitDialog}
                setVisible={setExitDialog}
                handleYes={handleCloseApp}
                handleNo={handleExit} />
        </SafeAreaView>
    )
}

export default Home