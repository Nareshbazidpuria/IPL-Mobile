import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabs = (props: BottomTabBarProps) => <TabBar {...props} />;

const AppNavigator: React.FC = () => {
  return (
    // <Stack.Navigator screenOptions={{headerShown: false}}>
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen name="Profile" component={ProfileScreen} />
    // </Stack.Navigator>
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={tabs}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Match" component={ProfileScreen} />
      <Tab.Screen name="Stats" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
