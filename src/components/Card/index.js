import React, { useRef, useEffect } from 'react';
import { Image, View, TouchableOpacity, Animated } from 'react-native';
import { styles } from './styles';


const Card = ({
    item, handleSelected, isOpened, width, height, widthImage, heightImage, borderRadius }) => {
    const { image } = item
    const animatedValue = useRef(new Animated.Value(0)).current;
    const currentValue = useRef(0);

    animatedValue.addListener(({ value }) => {
        currentValue.current = value;
    })

    const frontInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    })

    const backInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    })

    const frontOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [1, 0]
    })

    const backOpacity = animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [0, 1]
    })

    const flipUp = () => {
        if (currentValue.current < 90) {
            Animated.spring(animatedValue, {
                toValue: 180,
                friction: 4,
                tension: 5,
                useNativeDriver: true
            }).start();
        }
    }

    const flipDown = () => {
        if (currentValue.current >= 90) {
            Animated.spring(animatedValue, {
                toValue: 0,
                friction: 4,
                tension: 5,
                useNativeDriver: true
            }).start();
        }
    }

    const frontAnimatedStyle = {
        transform: [
            { rotateY: frontInterpolate }
        ]
    }
    const backAnimatedStyle = {
        transform: [
            { rotateY: backInterpolate }
        ]
    }

    useEffect(() => {
        if (isOpened) {
            flipUp()
        } else {
            flipDown()
        }
    }, [isOpened])


    return (
        <TouchableOpacity
            disabled={isOpened}
            onPress={() => handleSelected(item)}>
            <Animated.View style={[
                styles.flipCard,
                { width: width, height: height, borderRadius: borderRadius },
                styles.flipCardFront,
                frontAnimatedStyle,
                { opacity: frontOpacity }]} />
            <Animated.View style={[
                styles.flipCard,
                { width: width, height: height, borderRadius: borderRadius },
                styles.flipCardBack,
                backAnimatedStyle,
                { opacity: backOpacity }]}>
                <View style={{
                    width: widthImage,
                    height: heightImage,
                }}>
                    <Image style={{ width: '100%', height: '100%' }} source={image} />
                </View>
            </Animated.View>
        </TouchableOpacity >
    )
}

export default Card