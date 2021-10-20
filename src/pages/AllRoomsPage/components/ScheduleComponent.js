import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import homeIcon from '../../../assets/icons/home.png';

export default function ScheduleComponent() {
  return (
    <ScheduleGroup>
      <ScheduleItem
        time={'17:30'}
        club={'Lingo lounge'}
        roomTitle={'#13 ENGLISH_JAPANESE with my friend'}
      />
      <ScheduleItem
        time={'17:30'}
        club={'Lingo lounge'}
        roomTitle={'I read The History of Venice 🇮🇹'}
      />
      <ScheduleItem
        time={'18:00'}
        club={'Lingo lounge'}
        roomTitle={'The French cafe'}
      />
    </ScheduleGroup>
  );
}
const ScheduleGroup = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E6E3D6',
        borderRadius: 15,
        paddingTop: 10,
        marginVertical: 10,
        marginHorizontal: 20,
      }}>
      {props.children}
    </View>
  );
};

const ScheduleItem = props => {
  return (
    <View style={[scheduleItemStyles.container, {}]}>
      <Text style={[scheduleItemStyles.time]}>{props.time}</Text>
      <View
        style={{
          flex: 1,
        }}>
        <View style={scheduleItemStyles.clubContainer}>
          <Text style={scheduleItemStyles.clubTitle}>{props.club}</Text>
          <Image source={homeIcon} style={scheduleItemStyles.clubIcon} />
        </View>

        <Text style={scheduleItemStyles.roomTitle}>{props.roomTitle}</Text>
      </View>
    </View>
  );
};

const scheduleItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 40,
    // backgroundColor: 'lightblue',
  },
  time: {
    width: 'auto',
    marginRight: 10, // Separator
    // backgroundColor: 'lightgreen',
    alignItems: 'flex-end',
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#6E664E',
    fontSize: 14,
  },
  clubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  clubTitle: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#333333',
  },
  clubIcon: {
    width: 9,
    height: 9,
    marginLeft: 5,
  },
  roomTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#333333',
  },
});
