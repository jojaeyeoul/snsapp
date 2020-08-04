/**
 * App 컴포넌트
 * Screens의 Navigator.tsx 적용, RandomUserDataProvider의 Props인 cache 설정
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

import Navigator from '~/Screens/Navigator';
import {RandomUserDataProvider} from '~/Context/RandomUserData';

interface Props {}

const App = ({}: Props) => {
  return (
    <RandomUserDataProvider cache={true}>
      <StatusBar barStyle="default">
        <Navigator></Navigator>
      </StatusBar>
    </RandomUserDataProvider>
  );
};

export default App;
