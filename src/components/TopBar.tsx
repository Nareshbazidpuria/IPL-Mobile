import * as React from 'react';
import {View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
// import {navigationRef} from '../navigation/AppNavigator';

const TopBar: React.FC = () => {
  return (
    <View className="flex-row justify-between items-center px-4 py-3">
      {/* {navigationRef && navigationRef.current?.canGoBack?.() ? (
        <IonIcon
          name="arrow-back"
          size={30}
          color="gray"
          onPress={() => navigationRef.current?.goBack?.()}
        />
      ) : (
      )} */}
      <IonIcon name="list" size={30} color="gray" />
      <IonIcon name="person-circle" size={30} color="gray" />
    </View>
  );
};

export default TopBar;
