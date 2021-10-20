import React from 'react';
import {StyleSheet, View, Image, StatusBar} from 'react-native';

import searchIcon from '../../../assets/icons/search.png';
import inviteIcon from '../../../assets/icons/invite.png';
import calendarIcon from '../../../assets/icons/calendar.png';
import notificationIcon from '../../../assets/icons/notification.png';

import person6Image from '../../../assets/images/person6.jpg';

export default function AppBarComponent() {
  return (
    <View style={appBarStyles.container}>
      {/* Status bar */}
      <StatusBar backgroundColor="#F1EFE5" barStyle="dark-content" />

      {/* Left side */}
      <View style={appBarStyles.leftSide}>
        <Image source={searchIcon} style={appBarStyles.icon} />
      </View>
      {/* Right side */}
      <View style={appBarStyles.rightSide}>
        <Image
          source={inviteIcon}
          style={[appBarStyles.icon, {marginRight: 20}]}
        />
        <Image
          source={calendarIcon}
          style={[appBarStyles.icon, {marginRight: 20}]}
        />
        <View style={appBarStyles.notificationIconContainer}>
          <Image source={notificationIcon} style={appBarStyles.icon} />
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 11,
              height: 11,
              backgroundColor: '#EB4D3D',
              borderRadius: 11 / 2,
              borderWidth: 1,
              borderColor: '#F1EFE5',
            }}
          />
        </View>
        <Image source={person6Image} style={appBarStyles.myProfilePicture} />
      </View>
    </View>
  );
}

const appBarStyles = StyleSheet.create({
  container: {
    // flex: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F1EFE5',
  },
  leftSide: {
    // backgroundColor: 'lightblue',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  icon: {
    width: 20,
    height: 20,
  },
  notificationIconContainer: {
    marginRight: 20,
    width: 20,
    position: 'relative',
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
