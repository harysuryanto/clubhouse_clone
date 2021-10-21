import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import angleDownIcon from '../../../assets/icons/angle-down.png';
import fileIcon from '../../../assets/icons/file.png';
import person6Image from '../../../assets/images/person6.jpg';

export default function AppBarComponent(props) {
  return (
    <View style={styles.container}>
      {/* Left side */}
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <View style={styles.leftSide}>
          <Image
            source={angleDownIcon}
            style={[styles.icon, {marginRight: 10}]}
          />
          <Text style={styles.backButtonText}>All rooms</Text>
        </View>
      </TouchableOpacity>
      {/* Right side */}
      <View style={styles.rightSide}>
        <Image source={fileIcon} style={[styles.icon, {marginRight: 20}]} />
        <Image source={person6Image} style={styles.myProfilePicture} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F1EFE5',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  rightSide: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
  },
  icon: {
    width: 20,
    height: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  myProfilePicture: {
    width: 34,
    height: 34,
    borderRadius: 14,
    // overflow: 'hidden',
    // borderWidth: 1,
    // borderColor: '#000000',
  },
});
