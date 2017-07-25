import React from 'react';
import { StackNavigator } from 'react-navigation';
import Splash from '../components/Splash';

import Card from '../components/Card'

import SelectAmount from '../components/SelectAmount';
import Confirm from '../components/Confirm';
import Thanks from '../components/Thanks';


export const Root = StackNavigator({
  Splash: {
    screen: Splash,
  },
  Card:{
    screen: Card,
  SelectAmount: {
    screen: SelectAmount,
  },
  Confirm: {
    screen: Confirm,
  },
  Thanks: {
    screen: Thanks,
  }
})
