import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Hook from '../screens/Hook';
import Mobxscreen from '../screens/Mobxscreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Hook"
      tabBarOptions={{
        tabStyle: {backgroundColor: 'green'},
        activeTintColor: 'white',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Hook"
        component={Hook}
        options={{
          tabBarLabel: 'Hookscreen',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Mobx"
        component={Mobxscreen}
        options={{
          tabBarLabel: 'Mobx',
          headerStyle: {backgroundColor: 'green'},
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hook">
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
