// navigation/AppNavigator.js
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import CategoryFilterScreen from '../screens/CategoryFilterScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    NewsDetail: NewsDetailScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeStack,
    CategoryFilter: CategoryFilterScreen, // Yeni ekranı ekleyin
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
