import {
  View,
  Text,
  Image,
  Pressable,
  GestureResponderEvent,
  Animated,
} from 'react-native';
import React from 'react';
import {active, background} from '../utils/global';
import IonIcon from 'react-native-vector-icons/Ionicons';

type Props = {
  pin: (event: GestureResponderEvent) => void;
  onPress: (event: GestureResponderEvent) => void;
};

const MatchCard: React.FC<Props> = ({pin, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Animated.View
        className="rounded-3xl p-4 w-72 relative h-[130]"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{backgroundColor: active, width: 250}}>
        <Text className="text-gray-800 text-sm font-semibold">
          3rd ODI : Pak Tour of India 2023
        </Text>

        {/* Scores */}
        <View className="flex flex-row justify-between items-center mt-2">
          <View className="flex flex-row items-center">
            <Image
              source={{uri: 'https://flagcdn.com/w40/pk.png'}}
              className="w-6 h-6 mr-2"
            />
            <Text className="text-gray-900 font-bold text-lg">310 -10</Text>
            <Text className="text-gray-700 text-xs ml-1">(50)</Text>
          </View>
        </View>

        <View className="flex flex-row justify-between items-center mt-1">
          <View className="flex flex-row items-center">
            <Image
              source={{uri: 'https://flagcdn.com/w40/in.png'}}
              className="w-6 h-6 mr-2"
            />
            <Text className="text-gray-900 font-bold text-lg">145 -1</Text>
            <Text className="text-gray-700 text-xs ml-1">(25.2)</Text>
          </View>
        </View>

        {/* Target Info */}
        <Text className="text-gray-800 text-sm mt-2">
          India need 166 to win
        </Text>

        {/* Expand Icon */}
        <Pressable
          className="absolute top-0 right-0 h-10 w-10 rounded-bl-3xl"
          style={{backgroundColor: background}}
          onPress={pin}>
          <View
            style={{backgroundColor: active}}
            className="rounded-full ml-2 h-8 w-8 flex items-center justify-center">
            <IonIcon
              name="notifications"
              size={18}
              color={background}
              className=""
            />
          </View>
        </Pressable>
        <View
          className="absolute top-10 h-10 w-5 right-0"
          style={{backgroundColor: background}}
        />
        <View
          className="absolute top-10 h-10 w-5 right-0 rounded-tr-3xl"
          style={{backgroundColor: active}}
        />
        <View
          className="absolute right-10 h-5 w-10 top-0"
          style={{backgroundColor: background}}
        />
        <View
          className="absolute right-10 h-5 w-10 top-0 rounded-tr-3xl"
          style={{backgroundColor: active}}
        />
      </Animated.View>
    </Pressable>
  );
};

export default MatchCard;
