import {StyleSheet, Text, View, TouchableOpacity, Button,Dimensions} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';

const Modalcomp = props => {
  const {
    numbRoom,
    setNumbRoom,
    numadult,
    setNumAdult,
    numchild,
    setNumChild,
    isModalVisible,
    toggleModal,
  } = props;

  return (
    <Modal
      avoidKeyboard={true}
      swipeThreshold={200}
      onBackdropPress={toggleModal}
      onTouchOutside={toggleModal}
      isVisible={isModalVisible}
      // deviceWidth={Dimensions.get('window').width}
      swipeDirection={['up', 'down']}>
      <View style={{flex: 1}}>
        <View
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: Dimensions.get('window').width,
            backgroundColor: 'white',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            marginBottom: '-4%',
            height: '40%',
            width: '100%',
            marginTop: 'auto',
            justifyContent: 'space-between',
          }}>
          <View>
            <View
              style={{
                backgroundColor: 'grey',
                paddingVertical: 6,
                zIndex: 100,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}>
              <Text style={{color: 'white', fontSize: 24, textAlign: 'center'}}>
                Select Rooms and Guests!
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: '5%',
                marginTop: '4%',
              }}>
              <Text>Rooms</Text>

              <View style={{flexDirection: 'row', gap: 2}}>
                <TouchableOpacity
                  onPress={() => setNumbRoom(Math.max(1, numbRoom - 1))}
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 13,
                    backgroundColor: 'yellow',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text>{numbRoom}</Text>
                <TouchableOpacity
                  onPress={() => setNumbRoom(Math.max(1, numbRoom + 1))}
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 13,
                    backgroundColor: 'green',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
              {/*  */}
            </View>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: '5%',
                marginTop: '4%',
              }}>
              <Text>Adults</Text>

              <View style={{flexDirection: 'row', gap: 2}}>
                <TouchableOpacity
                  onPress={() => setNumAdult(Math.max(1, numadult - 1))}
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 13,
                    backgroundColor: 'yellow',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text>{numadult}</Text>
                <TouchableOpacity
                  onPress={() => setNumAdult(Math.max(1, numadult + 1))}
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 13,
                    backgroundColor: 'green',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: '5%',
                marginTop: '4%',
              }}>
              <Text>Childs</Text>

              <View style={{flexDirection: 'row', gap: 2}}>
                <TouchableOpacity
                  onPress={() => setNumChild(Math.max(0, numchild - 1))}
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 13,
                    backgroundColor: 'yellow',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    -
                  </Text>
                </TouchableOpacity>
                <Text>{numchild}</Text>
                <TouchableOpacity
                  onPress={() => setNumChild(Math.max(0, numchild + 1))}
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 13,
                    backgroundColor: 'green',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    +
                  </Text>
                </TouchableOpacity>
              </View>
              {/*  */}
            </View>
          </View>
          <View style={{marginHorizontal: 16, marginBottom: 15}}>
            <Button
              title="Apply"
              color={'#003580'}
              onPress={toggleModal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Modalcomp;

const styles = StyleSheet.create({});
