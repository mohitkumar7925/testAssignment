/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './src/screens/Home/HomeScreen';
import {Image, Text} from 'react-native';
import {Icons} from './src/utils/Icons';
import {SCREENS} from './src/utils/Constants';
import { FontFamily } from './src/utils/Theme';

const Tab = createBottomTabNavigator();

const TabIconMap = {
  [SCREENS.Home]: Icons.homeTab,
  [SCREENS.Closses]: Icons.clossesTab,
  [SCREENS.Giving]: Icons.givingTab,
  [SCREENS.Profile]: Icons.profileTab,
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel(props) {
            const {children , color , focused} = props
            return <Text style={{
              color:focused ? 'black' : 'gray',
              paddingTop:3,
              fontFamily:FontFamily.Medium,

            }} >{children}</Text>
          },

        }}>
        <Tab.Screen
          name={SCREENS.Home}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Image
                source={Icons.homeTab}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'black' : 'gray',
                }}
                resizeMode='contain'
              />
            ),

          }}
        />
        <Tab.Screen
          name={SCREENS.Closses}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Image
                source={Icons.clossesTab}
                style={{
                  width: size ,
                  height: size,
                  tintColor: focused ? 'black' : 'gray',
                }}
                resizeMode='contain'
              />
            ),
          }}
        />
        <Tab.Screen
          name={SCREENS.Giving}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Image
                source={Icons.givingTab}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'black' : 'gray',
                }}
              />
            ),

          }}
        />
        <Tab.Screen
          name={SCREENS.Profile}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused, size}) => (
              <Image
                source={Icons.profileTab}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'black' : 'gray',
                }}
                resizeMode='contain'
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
