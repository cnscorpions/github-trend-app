import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import PopularPage from './Popular';
import TrendPage from './Trend';
import FavoritePage from './Favorite';
import UserPage from './User';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

// tab配置项目
const items = [
  {
    name: '流行',
    component: PopularPage,
    icon: 'whatshot',
  },
  {
    name: '趋势',
    component: TrendPage,
    icon: 'trending-up',
  },
  {
    name: '收藏',
    component: FavoritePage,
    icon: 'favorite',
  },
  {
    name: '个人',
    component: UserPage,
    icon: 'verified-user',
  },
];

const getAllTabs = items => {
  return (
    <Tab.Navigator>
      {items.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: ({focused, color}) =>
              focused ? (
                <Text style={{color: 'red'}}>{item.name}</Text>
              ) : (
                <Text style={{color}}>{item.name}</Text>
              ),
            tabBarIcon: ({focused, color}) =>
              focused ? (
                <MaterialIcons
                  name={item.icon}
                  size={26}
                  style={{color: 'red'}}
                />
              ) : (
                <MaterialIcons name={item.icon} size={26} style={{color}} />
              ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const HomePage = () => {
  return <>{getAllTabs(items)}</>;
};

export default HomePage;
