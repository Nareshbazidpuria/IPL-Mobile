import React from 'react';
import {Button, NativeModules, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {background} from '../utils/global';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const {LiveScore} = NativeModules;

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({}) => {
  const handleStartActivity = () => {
    LiveScore?.startActivity?.();
  };

  return (
    <View className="flex-1" style={{backgroundColor: background}}>
      <Button title="Start Activity" onPress={handleStartActivity} />
    </View>
  );
};

export default HomeScreen;
