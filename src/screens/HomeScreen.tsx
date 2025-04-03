import React from 'react';
import {FlatList, NativeModules, Platform, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {background} from '../utils/global';
import MatchCard from '../components/MatchCard';

const {LiveScore, ExitApp} = NativeModules;

type RootStackParamList = {Home: undefined; Profile: undefined};
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {navigation: HomeScreenNavigationProp};

const HomeScreen: React.FC<Props> = ({}) => {
  const handleStartActivity = () => {
    if (Platform.OS === 'ios') {
      if (LiveScore?.startActivity) {
        LiveScore.startActivity();
        setTimeout(() => ExitApp?.exitApp?.(), 100);
        // LiveScore.endActivity?.();
      } else {
        console.warn('LiveScore module is not available');
      }
    } else {
      console.warn('LiveScore module is not available');
    }
  };

  return (
    <View className="flex-1 p-4" style={{backgroundColor: background}}>
      <View className="h-[130]">
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          keyExtractor={item => item.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{gap: 10}}
          renderItem={() => <MatchCard onPress={handleStartActivity} />}
          snapToInterval={260}
          decelerationRate="fast"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
