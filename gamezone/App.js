import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import Navigator from './routes/drawer'
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  "chilanka": require('./assets/fonts/Chilanka-Regular.ttf')
})


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return (
      <Navigator />
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => { console.warn('Blah Blah Blah') }}
      />
    )
  }
}