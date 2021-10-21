import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import plusIcon from '../../../assets/icons/plus.png';
import raiseHandIcon from '../../../assets/icons/raise-hand.png';

export default function BottomBarComponent(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <View style={styles.button}>
          <Text style={styles.leaveText}>
            {'   '}✌🏼 Leave quietly{'   '}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.rightSide}>
        <View style={[styles.button, {marginRight: 20}]}>
          <Image source={plusIcon} style={styles.icon} />
        </View>
        <View style={[styles.button, {alignSelf: 'flex-end'}]}>
          <Image source={raiseHandIcon} style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
  },
  leaveText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DA615C',
  },
  rightSide: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 100,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
