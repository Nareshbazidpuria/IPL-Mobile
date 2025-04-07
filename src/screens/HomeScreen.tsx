import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  NativeModules,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {background, MatchDetails} from '../utils/global';
import MatchCard from '../components/MatchCard';
import {RootStackParamList} from '../utils/types';
import Card from '../components/Card';
import ImageCard from '../components/ImageCard';

const {LiveScore, ExitApp} = NativeModules;

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {navigation: NavigationProp};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [viewAll, setViewAll] = useState<boolean>(false);
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
    <ScrollView className="flex-1 p-4" style={{backgroundColor: background}}>
      <View className="h-[170] mb-5">
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          keyExtractor={item => item.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{gap: 10}}
          renderItem={() => (
            <MatchCard
              pin={handleStartActivity}
              onPress={() => navigation.navigate(MatchDetails)}
            />
          )}
          snapToInterval={310}
          decelerationRate="fast"
        />
      </View>
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-white font-bold text-xl">Upcoming Matches</Text>
        <Pressable onPress={() => setViewAll(!viewAll)}>
          <Text className="text-white text-xs">
            {viewAll ? 'View Less' : 'View All'}
          </Text>
        </Pressable>
      </View>
      {!viewAll ? (
        <View className="h-[130] mb-5">
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            keyExtractor={item => item.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{gap: 10}}
            renderItem={({index}) => (
              <Card
                onPress={() => navigation.navigate(MatchDetails)}
                expanded={viewAll}
                key={index}
              />
            )}
            snapToInterval={220}
            decelerationRate="fast"
          />
        </View>
      ) : (
        <View className="flex flex-row mb-5 gap-3 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <Card
              expanded={viewAll}
              key={index}
              onPress={() => navigation.navigate(MatchDetails)}
            />
          ))}
        </View>
      )}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-white font-bold text-xl">Orange Cap</Text>
        <Pressable onPress={() => setViewAll(!viewAll)}>
          <Text className="text-white text-xs">
            {viewAll ? 'View Less' : 'View All'}
          </Text>
        </Pressable>
      </View>
      {!viewAll ? (
        <View
          className="mb-5"
          style={{
            height: viewAll
              ? Dimensions.get('screen').width / 2 - 20
              : Dimensions.get('screen').width / 2 + 10,
          }}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            keyExtractor={item => item.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{gap: 10}}
            renderItem={({index}) => (
              <ImageCard
                onPress={() => navigation.navigate(MatchDetails)}
                expanded={viewAll}
                key={index}
              />
            )}
            snapToInterval={220}
            decelerationRate="fast"
          />
        </View>
      ) : (
        <View className="flex flex-row mb-5 gap-3 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <ImageCard
              expanded={viewAll}
              key={index}
              onPress={() => navigation.navigate(MatchDetails)}
            />
          ))}
        </View>
      )}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-white font-bold text-xl">Purple Cap</Text>
        <Pressable onPress={() => setViewAll(!viewAll)}>
          <Text className="text-white text-xs">
            {viewAll ? 'View Less' : 'View All'}
          </Text>
        </Pressable>
      </View>
      {!viewAll ? (
        <View
          className="mb-5"
          style={{
            height: viewAll
              ? Dimensions.get('screen').width / 2 - 20
              : Dimensions.get('screen').width / 2 + 10,
          }}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            keyExtractor={item => item.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{gap: 10}}
            renderItem={({index}) => (
              <ImageCard
                onPress={() => navigation.navigate(MatchDetails)}
                expanded={viewAll}
                key={index}
              />
            )}
            snapToInterval={220}
            decelerationRate="fast"
          />
        </View>
      ) : (
        <View className="flex flex-row mb-5 gap-3 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <ImageCard
              expanded={viewAll}
              key={index}
              onPress={() => navigation.navigate(MatchDetails)}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
