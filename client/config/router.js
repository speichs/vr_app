import React from 'react';
import { StackNavigator } from 'react-navigation';
import Splash from '../components/Splash';
import Card from '../components/Card'

export const Root = StackNavigator({
  Splash: {
    screen: Splash,
  },
  Card:{
    screen: Card,
  }
})
