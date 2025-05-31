import {
  Pressable,
  GestureResponderEvent,
  Animated,
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {backgroundLight} from '../utils/global';

type Props = {
  onPress: (event: GestureResponderEvent) => void;
  expanded?: boolean;
};

const ImageCard: React.FC<Props> = ({onPress, expanded}) => {
  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={{
          width: expanded
            ? Dimensions.get('screen').width / 2 - 20
            : Dimensions.get('screen').width / 2 + 10,
          height: expanded
            ? Dimensions.get('screen').width / 2 - 20
            : Dimensions.get('screen').width / 2 + 10,
        }}
        className={'rounded-3xl relative bg-white overflow-hidden'}>
        <Image
          src="https://documents.bcci.tv/resizedimageskirti/107_compress.png"
          className="h-full"
        />
        <View className="absolute bottom-0 w-full z-10">
          <LinearGradient
            colors={['transparent', backgroundLight]}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
            }}>
            <Text className="font-semibold text-white text-xl">
              Rohit Sharma
            </Text>
          </LinearGradient>
        </View>
      </Animated.View>
    </Pressable>
  );
};

export default ImageCard;
