import React from 'react';
import {View, Text} from 'react-native';
import {background, inactive} from '../utils/global';

const MatchScreen: React.FC = () => {
  return (
    <View className="flex-1 p-4" style={{backgroundColor: background}}>
      <Text style={{color: inactive}}>Match Screen</Text>
    </View>
  );
};

export default MatchScreen;
