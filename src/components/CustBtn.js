import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustBtn = props => {
  return (
    <TouchableOpacity style={styles.btnwrap} onPress={props.onPress}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustBtn;

const styles = StyleSheet.create({
  btnwrap: {
    width: '60%',
    backgroundColor: 'green',
    paddingVertical: 10,
    borderRadius:25
  },
});
