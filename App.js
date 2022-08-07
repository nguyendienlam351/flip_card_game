import React, { useEffect } from "react";
import NavigaionStack from './src/routing/NavigationStack';
import RNBootSplash from "react-native-bootsplash";

const App = () => {
  useEffect(() => {
    RNBootSplash.hide()
  }, [])
  return (
    <NavigaionStack />
  )
}

export default App