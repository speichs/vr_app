import React from 'react';
import { StackNavigator } from 'react-navigation';

import Splash from '../components/Splash';
import SelectAmount from '../components/SelectAmount';



export const Root = StackNavigator({
  Splash: {
    screen: Splash,
  },
  SelectAmount: {
    screen: SelectAmount,
  }
})
