import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from 'react-native-shadow-cards';

const PropertyCard = () => {
  return (
    <View style={styles.container}>
      <Card style={{padding: 10, margin: 10}}>
        <Text>Open up App.js to start working on your app!</Text>
      </Card>
    </View>
  );
};

export default PropertyCard;

const styles = StyleSheet.create({});
