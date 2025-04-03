import React, {useRef} from 'react';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import TopBar from '../components/TopBar';
import {NavigationContainer} from '@react-navigation/native';
import {screens} from '../utils/global';
import MatchScreen from '../screens/MatchScreen';
import StatsScreen from '../screens/StatsScreen';

const Tab = createBottomTabNavigator();
const tabs = (props: BottomTabBarProps) => <TabBar {...props} />;

export let navigationRef: any = null;

const AppNavigator: React.FC = () => {
  navigationRef = useRef(null);
  return (
    <>
      <TopBar />
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator screenOptions={{headerShown: false}} tabBar={tabs}>
          <Tab.Screen name={screens.Home} component={HomeScreen} />
          <Tab.Screen name={screens.Match} component={MatchScreen} />
          <Tab.Screen name={screens.Stats} component={StatsScreen} />
          <Tab.Screen name={screens.Profile} component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
