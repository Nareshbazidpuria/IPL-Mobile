import {enableScreens} from 'react-native-screens';
enableScreens();

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import '../global.css';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
