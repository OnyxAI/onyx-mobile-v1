import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../HomeScreen';
import SettingsScreen from '../SettingsScreen';
import SideBar from '../SideBar';

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

const AppContainer = createAppContainer(HomeScreenRouter);

export default AppContainer;