import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import RequestScreen from './screens/BookRequestScreen';
import DonateScreen from './screens/BookDonationScreen';


export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  Donate: { screen: DonateScreen },
  Request: { screen: RequestScreen },
});
const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  TabNavigator: { screen: TabNavigator },
});
const AppContainer = createAppContainer(SwitchNavigator);
