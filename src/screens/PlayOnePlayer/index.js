import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, TouchableOpacity, View, Image, BackHandler } from "react-native";
import { styles } from "./styles";
import Card from "../../components/Card";
import { FlatGrid } from 'react-native-super-grid';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Timer from "../../components/Timer";
import WinDialog from "../../components/WinDialog";
import PauseDialog from '../../components/PauseDialog';

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
    }
]

const pause_icon = require('../../static/images/icons/pause-button.png')

const initList = [...list, ...list]

const PlayOnePlayer = ({ navigation }) => {
    const [cardList, setCardList] = useState([])
    const [selectedFirst, setSelectedFirst] = useState(null)
    const [selectedSecond, setSelectedSecond] = useState(null)
    const [time, setTime] = useState(0)
    const countMatched = useRef(0)
    const [winDialog, setWinDialog] = useState(false)
    const [pauseDialog, setPauseDialog] = useState(false)

    const handlePause = () => {
        setPauseDialog(preValue => !preValue)
        return true
    }

    const getShuffledArr = arr => {
        const newArr = arr.slice()
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        return newArr
    };

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
        let ramdomList = getShuffledArr(initList)
        ramdomList = ramdomList.map((item, index) => ({ id: index, ...item, isMatched: false }))
        setCardList([...ramdomList])
        setSelectedFirst(null)
        setSelectedSecond(null)
        setTime(0)
        countMatched.current = 0
        setWinDialog(false)
        setPauseDialog(false)
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
                    countMatched.current = countMatched.current + 2

                    if (countMatched.current == cardList.length) {
                        setWinDialog(preValue => !preValue)
                    }
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
            <WinDialog visible={winDialog} time={time}
                handleReplay={newGame} handleExit={handleExit} />
            <PauseDialog visible={pauseDialog} time={time}
                handleContinue={handlePause} handleReplay={newGame} handleExit={handleExit} />
            <View style={styles.top_view}>
                <Timer time={time} setTime={setTime} pause={winDialog || pauseDialog} />

                <TouchableOpacity style={styles.pause_button} onPress={handlePause}>
                    <Image style={styles.image} source={pause_icon} />
                </TouchableOpacity>
            </View>

            <View>
                <FlatGrid
                    itemDimension={wp(21)}
                    data={cardList}
                    spacing={wp(1)}
                    renderItem={({ item }) => (
                        <Card item={item}
                            handleSelected={handleSelected}
                            isOpened={item == selectedFirst || item == selectedSecond || item.isMatched}
                            width={wp(21)}
                            height={hp(16)}
                            widthImage={wp(13)}
                            heightImage={wp(13)} />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default PlayOnePlayer