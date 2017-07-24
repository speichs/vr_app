import React from 'react';
import { StackNavigator } from 'react-navigation';

import Splash from '../components/Splash';



export const Root = StackNavigator({
  Splash: {
    screen: Splash,
  },
})
