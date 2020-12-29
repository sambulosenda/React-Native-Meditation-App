/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Login from './src/screens/Login';

import SplashScreen from './src/screens/SlashScreen';
import Signup from './src/screens/Signup';
import ChooseTopic from './src/screens/ChooseTopic';

const App: () => React$Node = () => {
  return <ChooseTopic />
};

const styles = StyleSheet.create({});

export default App;
