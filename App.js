import React, { useEffect } from "react";
import { StatusBar } from 'react-native';
import NavigaionStack from './src/routing/NavigationStack';
import RNBootSplash from "react-native-bootsplash";
import { colors } from "./src/utils/colors";

const App = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])
  return (
    <>
      <StatusBar
        animated={true}
        barStyle='dark-content'
        backgroundColor={colors.background} />
      <NavigaionStack />
    </>
  )
}

export default App