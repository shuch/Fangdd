import React, { Component } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import TabBarItem from './TabBarItem';
import HomeScreen from './home/HomeScreen';
import ToutiaoScreen from './toutiao/ToutiaoScreen';
import MessageScreen from './message/MessageScreen';
import FindScreen from './find/FindScreen';
import MineScreen from './mine/MineScreen';


const Tab = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '首页',
        tabBarIcon: ({ focused, tintColor }) => ( 
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../img/tabbar/home.png')}
            selectedImage={require('../img/tabbar/home_active.png')}
          />
        )
      }), 
    },
    Toutiao: {
      screen: ToutiaoScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '头条',
        tabBarIcon: ({ focused, tintColor }) => ( 
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../img/tabbar/toutiao.png')}
            selectedImage={require('../img/tabbar/toutiao_active.png')}
          />
        )
      }), 
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '消息',
        tabBarIcon: ({ focused, tintColor }) => ( 
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../img/tabbar/message.png')}
            selectedImage={require('../img/tabbar/message_active.png')}
          />
        )
      }), 
    },
    Find: {
      screen: FindScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '发现',
        tabBarIcon: ({ focused, tintColor }) => ( 
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../img/tabbar/find.png')}
            selectedImage={require('../img/tabbar/find_active.png')}
          />
        )
      }), 
    },
    Mine: {
      screen: MineScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '我',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabBarItem
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../img/tabbar/mine.png')}
            selectedImage={require('../img/tabbar/mine_active.png')}
          />
        )
      }), 
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#333',
      inactiveTintColor: '#333',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: false,
    swipeEnabled: false,
  },
);

export default Navigator = StackNavigator(
  {
    Tab: {
      screen: Tab,
    },
  },
  {
    initialRouteName: 'Tab',
    navigationOptions: {
      // headerStyle: {
        // backgroundColor: '#fff',
      // },
    },
  }
);
