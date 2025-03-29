import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {background} from '../utils/global';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

import {NativeModules} from 'react-native';

const {LiveActivityModule} = NativeModules;

// Start Live Activity
LiveActivityModule.startLiveActivity('Daily Expense', '500', 'Food');

// Update Live Activity
setTimeout(() => {
  LiveActivityModule.updateLiveActivity('700', 'Transport');
}, 5000);

// End Live Activity
setTimeout(() => {
  LiveActivityModule.endLiveActivity();
}, 10000);

const HomeScreen: React.FC<Props> = ({}) => {
  return (
    <View className="flex-1" style={{backgroundColor: background}}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
