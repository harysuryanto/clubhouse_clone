import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import AppBarComponent from './components/AppBarComponent.js';
import ScheduleComponent from './components/ScheduleComponent.js';
import RoomComponent from './components/RoomComponent.js';
import BottomBarComponent from './components/BottomBarComponent.js';

export default class AllRoomsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* App bar */}
        <View style={styles.appBar}>
          <AppBarComponent />
        </View>

        {/* Body */}
        <View style={styles.body}>
          <ScrollView>
            {/* Schedule section */}
            <ScheduleComponent />

            {/* All Rooms */}
            <RoomComponent />

            {/* Space */}
            <View style={{height: 80}} />
          </ScrollView>
        </View>

        {/* Bottom bar */}
        <View style={styles.bottomBar}>
          <BottomBarComponent />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#F1EFE5',
    // alignContent: 'stretch',
  },
  appBar: {
    padding: 30,
    // backgroundColor: 'green',
  },
  body: {
    flex: 1,
    // paddingHorizontal: 20,
  },
  bottomBar: {
    position: 'absolute',
    flexDirection: 'row',
    // backgroundColor: 'black',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
