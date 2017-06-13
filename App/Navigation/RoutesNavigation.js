import React from 'react'
import { TabNavigator } from 'react-navigation'
import SettingsScreen from '../Containers/SettingsScreen'
import ChaptersListScreen from '../Containers/ChaptersListScreen'
import MembersListScreen from '../Containers/MembersListScreen'
import ArticleListScreen from '../Containers/ArticleListScreen'
import { Icon } from '@shoutem/ui'


export const MainTabNav = TabNavigator({
  ArticleListScreen: { 
      screen: ArticleListScreen,
      navigationOptions: {
        tabBarLabel: 'Artikel',
        tabBarIcon: ({ tintColor }) => <Icon name="news" />,
        title: 'Berita'
      }
  },
  MembersListScreen: { 
      screen: MembersListScreen,
      navigationOptions: {
        title: 'Member',
        tabBarLabel: 'Member',
        tabBarIcon: ({ tintColor }) => <Icon name="friends" />
      } 
  },
  ChaptersListScreen: { 
      screen: ChaptersListScreen,
      navigationOptions: {
        title: 'Chapter',
        tabBarLabel: 'Chapter',
        tabBarIcon: ({ tintColor }) => <Icon name="pin" />
      } 
  },
  SettingsScreen: { 
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => <Icon name="settings" />
      }
  }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ArticleListScreen',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showLabel: false,
    showIcon: true,
    style: {
      backgroundColor: '#FFFFFF',
    },
  },
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom'
})