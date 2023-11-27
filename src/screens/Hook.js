import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import C_TextInput from '../components/C_TextInput';
import CustBtn from '../components/CustBtn';
import {useHooksContext} from '../contextapi/HookContext';

const Hook = () => {
  const [weight, setWeight] = useState();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [swtvalue, setSwtValue] = useState('Imperial');
  const {
    lbs,
    setLbs,
    ft,
    setFt,
    inches,
    setInches,
    kg,
    meters,
    unit,
    setUnit,
    resetFields,
    saveToLocalStorage,
  } = useHooksContext();

  const toggleSwitch = () => {
    setIsSwitchOn(previousState => !previousState);
    if (swtvalue === 'Imperial' && unit === 'Imperial') {
      setSwtValue('Metric');
      setUnit('Metric');
    } else {
      setSwtValue('Imperial');
      setUnit('Imperial');
    }
  };


  return (
    <View style={styles.hookwrapper}>
      <Text style={{textAlign: 'center', marginBottom: 4}}>
        Unit converter (withHook)
      </Text>
      {unit == 'Imperial' ? (
        <View>
          <View
            style={{
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <C_TextInput
              placeholder={'lbs'}
              title={'lbs'}
              value={lbs}
              onChangeText={text => setLbs(text)}
            />
          </View>
        </View>
      ) : (
        <View>
          <View
            style={{
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <C_TextInput placeholder={'kg'} title={'kg'} value={kg} />
          </View>
        </View>
      )}

      {unit == 'Imperial' ? (
        <View
          style={{
            flexDirection: 'row',
            marginTop: 15,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: '45%'}}>
            <C_TextInput
              placeholder={'feet'}
              width={'80%'}
              title={'ft'}
              value={ft}
              onChangeText={text => setFt(text)}
            />
          </View>
          <View style={{width: '45%'}}>
            <C_TextInput
              placeholder={'Inches'}
              width={'80%'}
              title={'in'}
              value={inches}
              onChangeText={text => setInches(text)}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            marginTop: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <C_TextInput
            placeholder={'m'}
            title={'m'}
            value={meters}
            onChangeText={text => setInches(text)}
          />
        </View>
      )}

      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 12}}>
        <TouchableOpacity onPress={toggleSwitch} style={styles.switchContainer}>
          <Text
            style={ unit == 'Imperial'
                ? styles.selectedText
                : styles.unselectedText
            }>
            Impertial
          </Text>
          <Switch
            value={isSwitchOn}
            onValueChange={toggleSwitch}
            style={styles.switch}
          />
          <Text
            style={ unit == 'Metric'
                ? styles.selectedText
                : styles.unselectedText
            }>
            Metric
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
        <CustBtn title={'save to disk'} onPress={saveToLocalStorage} />
      </View>
      <View style={{marginTop: 15}}>
        <TouchableOpacity onPress={resetFields}>
          <Text style={{color: 'skyblue', textAlign: 'center'}}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Hook;

const styles = StyleSheet.create({
  hookwrapper: {
    flex: 1,
    backgroundColor: '#303330',
    justifyContent: 'center',
  },
  switchContainer: {
    width: '90%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 24,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  selectedText: {
    width: '50%',
    backgroundColor: '#347337',
    color: 'white',
    paddingTop: 8,
    height: 45,
    textAlign: 'center',
  },
  unselectedText: {
    width: '50%',
    paddingTop: 8,
    backgroundColor: 'white',
    height: 45,
    color: 'black',

    textAlign: 'center',
  },
  switch: {
    opacity: 0,
    width: 0,
  },
});
