/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
//import App from './App';
import App from './components/App';
import {name as appName} from './app.json';
import AsyncStorage from '@react-native-community/async-storage';


AppRegistry.registerComponent(appName, () => App);
