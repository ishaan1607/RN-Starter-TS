import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ComponentsScreen from './src/screens/ComponentsScreen';
import HomeScreens from './src/screens/HomeScreens';
import JsxExercise from './src/screens/JsxExercise';

const navigator = createStackNavigator(
  {
    Home: HomeScreens,
    Components:ComponentsScreen,
    Exercise:JsxExercise
  },
  {
    initialRouteName: 'Exercise',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
