import {
  View,
  Text,
  Image,
  Pressable,
  GestureResponderEvent,
  Animated,
  Dimensions,
} from 'react-native';
import React from 'react';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  expanded?: boolean;
};

const Card: React.FC<Props> = ({onPress, expanded}) => {
  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={{
          width: expanded
            ? Dimensions.get('screen').width / 2 - 20
            : Dimensions.get('screen').width / 2 + 10,
        }}
        className={'rounded-3xl p-4 relative h-[130] bg-white'}>
        <Text className="text-gray-800 text-sm font-semibold">
          Pak Tour of India 2023
        </Text>

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
      </Animated.View>
    </Pressable>
  );
};

export default Card;
