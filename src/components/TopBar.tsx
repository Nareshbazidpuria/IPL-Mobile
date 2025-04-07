import * as React from 'react';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {background} from '../utils/global';

const TopBar: React.FC = () => {
  return (
    <View
      className="flex-row justify-between items-center px-4 py-3"
      style={{backgroundColor: background}}>
      <IonIcon name="list" size={30} color="gray" />
      <IonIcon name="person-circle" size={30} color="gray" />
    </View>
  );
};

export default TopBar;
