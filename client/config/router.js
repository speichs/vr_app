import React from 'react';
import { StackNavigator } from 'react-navigation';

import Splash from '../components/Splash';
import SelectAmount from '../components/SelectAmount';
import Confirm from '../components/Confirm';
import Thanks from '../components/Thanks';

export const Root = StackNavigator({
  Splash: {
    screen: Splash,
  },
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
