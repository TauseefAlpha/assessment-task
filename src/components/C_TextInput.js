import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const C_TextInput = props => {
  const {placeholder, title, width} = props;

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
      <TextInput
        placeholder={placeholder}
        onChangeText={props.onChangeText}
        value={props.value?props.value:0}
        keyboardType="numeric"
        style={{
          borderColor: 'grey',
          borderWidth: 1,
          width: width || '80%',
          borderRadius: 30,
          paddingHorizontal: 8,
        }}
      />
      <Text style={{fontSize: 17}}>{title}</Text>
    </View>
  );
};

export default C_TextInput;

const styles = StyleSheet.create({});
