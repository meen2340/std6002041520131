/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import App from './components/App';
import {name as appName} from './app.json';
import {AsyncStorage} from 'react-native';

AppRegistry.registerComponent(appName, () => App);
