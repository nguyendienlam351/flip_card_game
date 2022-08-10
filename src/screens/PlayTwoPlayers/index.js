import React, { useState, useEffect } from "react";
import { SafeAreaView, TouchableOpacity, View, Image, Text, BackHandler } from "react-native";
import { styles } from "./styles";
import Card from "../../components/Card";
import { FlatGrid } from 'react-native-super-grid';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import WinDialogTwoPlayers from "../../components/WinDialogTwoPlayers";
import PauseDialog from '../../components/PauseDialog';
import { shuffledList } from "../../utils/shuffle";


const list = [
    {
        image: require('../../static/images/cards/card_01.png')
    },
    {
        image: require('../../static/images/cards/card_02.png')
    },
    {
        image: require('../../static/images/cards/card_03.png')
    },
    {
        image: require('../../static/images/cards/card_04.png')
    },
    {
        image: require('../../static/images/cards/card_05.png')
    },
    {
        image: require('../../static/images/cards/card_06.png')
    },
    {
        image: require('../../static/images/cards/card_07.png')
    },
    {
        image: require('../../static/images/cards/card_08.png')
    },
    {
        image: require('../../static/images/cards/card_09.png')
    },
    {
        image: require('../../static/images/cards/card_10.png')
    },
    {
        image: require('../../static/images/cards/card_11.png')
    },
    {
        image: require('../../static/images/cards/card_12.png')
    },
    {
        image: require('../../static/images/cards/card_13.png')
    },
    {
        image: require('../../static/images/cards/card_14.png')
    },
    {
        image: require('../../static/images/cards/card_15.png')
    },
    {
        image: require('../../static/images/cards/card_16.png')
    },
    {
        image: require('../../static/images/cards/card_17.png')
    },
    {
        image: require('../../static/images/cards/card_18.png')
    },
    {
        image: require('../../static/images/cards/card_19.png')
    },
    {
        image: require('../../static/images/cards/card_20.png')
    },
    {
        image: require('../../static/images/cards/card_21.png')
    }
]

const pause_icon = require('../../static/images/icons/pause-button.png')

const initList = [...list, ...list]

const player_one = 0
const player_two = 1

const PlayOnePlayer = ({ navigation }) => {
    const [cardList, setCardList] = useState([])
    const [selectedFirst, setSelectedFirst] = useState(null)
    const [selectedSecond, setSelectedSecond] = useState(null)

    const [pauseDialog, setPauseDialog] = useState(false)
    const [turn, setTurn] = useState(player_one)

    const [scoreOne, setScoreOne] = useState(0)
    const [scoreTwo, setScoreTwo] = useState(0)

    const handlePause = () => {
        setPauseDialog(preValue => !preValue)
        return true
    }

    const handleSelected = (card) => {
        if (!selectedFirst) {
            setSelectedFirst(card)
        } else if (!selectedSecond) {
            setSelectedSecond(card)
        }
    }

    const handleExit = () => {
        navigation.goBack()
    }

    const newGame = () => {
        let ramdomList = shuffledList(initList)
        ramdomList = ramdomList.map((item, index) => ({ id: index, ...item, isMatched: false }))
        setCardList([...ramdomList])
        setSelectedFirst(null)
        setSelectedSecond(null)

        setPauseDialog(false)
        setTurn(player_one)

        setScoreOne(0)
        setScoreTwo(0)
    }

    useEffect(() => {
        if (selectedFirst && selectedSecond) {
            setTimeout(() => {
                if (selectedFirst.image == selectedSecond.image) {
                    setCardList(preList => preList.map((item) => {
                        if (item == selectedFirst || item == selectedSecond) {
                            return { ...item, isMatched: true }
                        } else {
                            return item
                        }
                    }))

                    turn == player_one ? setScoreOne(preValue => preValue + 1) : setScoreTwo(preValue => preValue + 1)
                }
                else {
                    setTurn(preValue => preValue != player_one ? player_one : player_two)
                }
                setSelectedFirst(null)
                setSelectedSecond(null)
            }, 170)
        }
    }, [selectedFirst, selectedSecond])

    useEffect(() => {
        newGame()

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            handlePause
        );

        return () => backHandler.remove();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <WinDialogTwoPlayers visible={(scoreOne + scoreTwo) * 2 == cardList.length}
                scoreOne={scoreOne} scoreTwo={scoreTwo}
                handleReplay={newGame} handleExit={handleExit} />
            <PauseDialog visible={pauseDialog}
                handleContinue={handlePause} handleReplay={newGame} handleExit={handleExit} />

            <View style={[styles.top_view]}>
                <View style={[styles.score_view, styles.score_player_one]}>
                    {turn != player_one && <View style={styles.blur_view} />}
                    <Text style={styles.text}>{scoreOne}</Text>
                </View>

                <TouchableOpacity style={styles.pause_button} onPress={handlePause}>
                    <Image style={styles.image} source={pause_icon} />
                </TouchableOpacity>

                <View style={[styles.score_view, styles.score_player_two]}>
                    {turn != player_two && <View style={styles.blur_view} />}
                    <Text style={styles.text}>{scoreTwo}</Text>
                </View>
            </View>

            <View >
                <FlatGrid
                    itemDimension={wp(14.3)}
                    data={cardList}
                    spacing={wp(.5)}
                    renderItem={({ item }) => (
                        <Card item={item}
                            handleSelected={handleSelected}
                            isOpened={item == selectedFirst || item == selectedSecond || item.isMatched}
                            width={wp(14.3)}
                            height={hp(12)}
                            widthImage={wp(9.5)}
                            heightImage={wp(9.5)}
                            borderRadius={wp(3)} />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default PlayOnePlayer