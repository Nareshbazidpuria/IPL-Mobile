import * as React from 'react';
import {View} from 'react-native';
import {Text, PlatformPressable} from '@react-navigation/elements';
import {useLinkBuilder, useTheme} from '@react-navigation/native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  active,
  background,
  backgroundLight,
  inactive,
  primary,
} from '../utils/global';

const TabBar = ({descriptors, navigation, state}: BottomTabBarProps) => {
  const {colors} = useTheme();
  const {buildHref} = useLinkBuilder();

  return (
    <View style={{backgroundColor: background}}>
      <View
        className="m-2 rounded-full flex-row"
        style={{backgroundColor: backgroundLight}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && event && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <PlatformPressable
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              className="flex-1 items-center justify-center p-3"
              key={route.key}>
              <View
                className="flex flex-row gap-1 rounded-full items-center justify-center py-2 px-3"
                style={{
                  backgroundColor: isFocused ? active : backgroundLight,
                }}>
                {options.tabBarIcon &&
                  options.tabBarIcon({
                    focused: isFocused,
                    color: isFocused ? colors.primary : colors.text,
                    size: 24,
                  })}
                <Text
                  className="p-1 rounded-full"
                  style={{color: isFocused ? primary : inactive}}>
                  {typeof label === 'function'
                    ? label({
                        focused: isFocused,
                        color: isFocused ? colors.primary : colors.text,
                        position: 'beside-icon',
                        children: '',
                      })
                    : label}
                </Text>
              </View>
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
