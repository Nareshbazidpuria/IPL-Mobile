import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const FloatingVideo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>dd</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  video: {width: 300, height: 200},
});

export default FloatingVideo;
