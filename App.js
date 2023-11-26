import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigation from './src/navigationHub/MainNavigation';
import {HooksProvider} from './src/contextapi/HookContext';

const App = () => {
  return (
    <HooksProvider>
      <MainNavigation />
    </HooksProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
