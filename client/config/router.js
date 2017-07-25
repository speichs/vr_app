import React from 'react';
import { StackNavigator } from 'react-navigation';
import Splash from '../components/Splash';
import SelectAmount from '../components/SelectAmount';
import Confirm from '../components/Confirm';
import Select from '../components/Select';
import Custom from '../components/Custom';
import Card from '../components/Card';


export const Root = StackNavigator({
  Splash: {
    screen: Splash,
  },
  SelectAmount: {
    screen: SelectAmount,
  },
  Confirm: {
    screen: Confirm
  },
  Select: {
    screen: Select
  },
  Custom: {
    screen: Custom
  },
  Card: {
    screen: Card
  }
})
