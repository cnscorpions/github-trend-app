import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

const WelcomePage = props => {
  // 实现一个定时器，欢迎页2s后跳转首页
  useEffect(() => {
    let timer = setTimeout(() => {
      NavigationUtil.goToHome(props);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 24}}>Welcome</Text>
      </View>
    </>
  );
};

export default WelcomePage;
