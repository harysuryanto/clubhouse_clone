import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import menuDotsIcon from '../../../assets/icons/menu-dots.png';
import ListItemComponent from './ListItemComponent';

export default function ListComponent() {
  return (
    <View style={styles.container}>
      {/* List of participants */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <Text style={styles.title}>
            Talking how to design Clubhouse in your Figma
          </Text>
          <Image source={menuDotsIcon} style={styles.optionIcon} />
        </View>

        <View style={styles.listBody}>
          <ListItemComponent isModerator />
          <ListItemComponent isModerator isNewUser />
          <ListItemComponent isNewUser isMuted />
          <ListItemComponent isNewUser />
          <ListItemComponent />
          <ListItemComponent isMuted />
          <ListItemComponent />
          <ListItemComponent isModerator />
          <ListItemComponent isMuted />
          <ListItemComponent isMuted />
          <ListItemComponent />
          <ListItemComponent isNewUser isMuted />
          <ListItemComponent isNewUser isMuted />
          <ListItemComponent isMuted />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    paddingBottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    // backgroundColor: 'pink',
  },
  title: {
    flex: 1,
    marginRight: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    // backgroundColor: 'red',
  },
  optionIcon: {
    width: 20,
    height: 20,
  },
  listBody: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'black',
  },
});
