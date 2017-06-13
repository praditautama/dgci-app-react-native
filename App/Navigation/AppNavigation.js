import React from 'react'
import { StackNavigator } from 'react-navigation'
import ChapterDetailsScreen from '../Containers/ChapterDetailsScreen'
import ArticleDetailsScreen from '../Containers/ArticleDetailsScreen'

import ArticleListScreen from '../Containers/ArticleListScreen'

import { MainTabNav } from './RoutesNavigation'
import styles from './Styles/NavigationStyles'
import { Colors } from '../Themes'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Home: { screen: MainTabNav },
  ArticleDetailsScreen: { screen: ArticleDetailsScreen },
  ChapterDetailsScreen: { screen: ChapterDetailsScreen },
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'Home',
})

MainTabNav.navigationOptions = {
  //title: 'DGCI',
  headerStyle: { backgroundColor: Colors.black },
  headerTintColor: '#FFFFFF'
};

ArticleDetailsScreen.navigationOptions = {
  headerStyle: { backgroundColor: Colors.black },
  headerTintColor: '#FFFFFF'
}

ChapterDetailsScreen.navigationOptions = {
  headerStyle: { backgroundColor: Colors.black },
  headerTintColor: '#FFFFFF'
}
export default PrimaryNav
