import React from 'react';
import {View, Text} from 'react-native';
import {background, inactive} from '../utils/global';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utils/types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Stats'>;
type Props = {navigation: NavigationProp};

const ProfileScreen: React.FC<Props> = ({}) => {
  return (
    <View className="flex-1 p-4" style={{backgroundColor: background}}>
      <Text style={{color: inactive}}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
