import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './Routes';

const MainStack = createNativeStackNavigator();

const NavigaionStack = () => {
    return (
        <NavigationContainer >
            <MainStack.Navigator>
                {Routes?.map((route, key) => {
                    const { name, component, options } = route;
                    return <MainStack.Screen key={key} name={name} component={component} options={options} />;
                })}
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default NavigaionStack
