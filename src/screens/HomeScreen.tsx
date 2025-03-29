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

const HomeScreen: React.FC<Props> = ({}) => {
  return (
    <View className="flex-1" style={{backgroundColor: background}}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
