import React, {createContext, useState, useEffect} from 'react';
import {ActivityIndicator, Image} from 'react-native';
import Styled from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';

const Loading = Styled.View`
    flex: 1;
    backgroud-color: #FFFFFF;
    align-items: center;
    justify-content: center;
`;

interface Props {
  cache?: boolean;
  children: JSX.Element | Array<JSX.Element>;
}

interface IRandomUserData {
  getMyFeed: (number?: number) => Array<IFeed>;
}

const RandomUserDataContext = createContext<IRandomUserData>({
  getMyFeed: (number: number = 10) => {
    return [];
  },
});

const RandomUserDataProvider = ({cache, children}: Props) => {
  const [userList, setUserList] = useState<Array<IUserProfile>>([]);
  const [description, setDescription] = useState<Array<string>>([]);
  const [imageList, setImageList] = useState<Array<string>>([]);

  const getCacheData = async (key: string) => {
    const cacheData = await AsyncStorage.getItem(key);
    if (cache === false || cacheData === null) {
      return undefined;
    }
    const cacheList = JSON.parse(cacheData);

    if (cacheList.length !== 25) {
      return undefined;
    }

    return cacheList;
  };

  const setCachedData = (key: string, data: Array<any>) => {
      AsyncStorage.setItem(key, JSON.stringify(data));
  };

  xonst setUsers = async () => {
      const cachedData = await getCacheData('UserList');
      if(cachedData) {
          setUserList(cachedData);
          return;
      }

      try {}
  }
};
