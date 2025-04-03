import {enableScreens} from 'react-native-screens';
enableScreens();

import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import '../global.css';
import {background} from './utils/global';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" style={{backgroundColor: background}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
