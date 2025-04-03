import React from 'react';
import {View, Text} from 'react-native';
import {background, inactive} from '../utils/global';

const StatsScreen: React.FC = () => {
  return (
    <View className="flex-1 p-4" style={{backgroundColor: background}}>
      <Text style={{color: inactive}}>Stats Screen</Text>
    </View>
  );
};

export default StatsScreen;
