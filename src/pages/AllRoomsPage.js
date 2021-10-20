import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import AppBarComponent from '../components/AppBarComponent.js';

import homeIcon from '../assets/icons/home.png';
import menuIcon from '../assets/icons/menu.png';

import person1Image from '../assets/images/person1.png';
import person2Image from '../assets/images/person2.png';
import person3Image from '../assets/images/person3.png';
import person4Image from '../assets/images/person4.png';
import person5Image from '../assets/images/person5.png';

export default class AllRoomsPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Schedule section */}
        <ScheduleGroup>
          <ScheduleItem
            time={'17:30'}
            lounge={'Lingo lounge'}
            roomTitle={'#13 ENGLISH_JAPANESE with my friend'}
          />
          <ScheduleItem
            time={'17:30'}
            lounge={'Lingo lounge'}
            roomTitle={'I read The History of Venice 🇮🇹'}
          />
          <ScheduleItem
            time={'18:00'}
            lounge={'Lingo lounge'}
            roomTitle={'The French cafe'}
          />
        </ScheduleGroup>

        {/* All Rooms */}
        <RoomGroup>
          <TouchableOpacity>
            <RoomItem />
          </TouchableOpacity>
          <TouchableOpacity>
            <RoomItem />
          </TouchableOpacity>
          <TouchableOpacity>
            <RoomItem />
          </TouchableOpacity>
          <TouchableOpacity>
            <RoomItem />
          </TouchableOpacity>
        </RoomGroup>
      </View>
    );
  }
}

const ScheduleGroup = props => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E6E3D6',
        borderRadius: 20,
        paddingTop: 10,
        marginBottom: 20,
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
        <View style={scheduleItemStyles.loungeContainer}>
          <Text style={scheduleItemStyles.loungeTitle}>{props.lounge}</Text>
          <Image source={homeIcon} style={scheduleItemStyles.loungeIcon} />
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
  loungeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  loungeTitle: {
    fontSize: 10,
    textTransform: 'uppercase',
    color: '#333333',
  },
  loungeIcon: {
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

const RoomGroup = props => {
  return (
    <View
      style={{
        flexDirection: 'column',
        // backgroundColor: 'lightblue',
      }}>
      {props.children}
    </View>
  );
};

const RoomItem = () => {
  return (
    <View style={[roomItemStyles.container, roomItemStyles.boxWithShadow]}>
      <Text style={roomItemStyles.roomTitle}>
        Talking how to design Clubhouse in your Figma
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        {/* Image */}
        <View
          style={{
            position: 'relative',
            width: 60,
            height: 60,
            marginRight: 20,
          }}>
          <Image
            source={person2Image}
            style={{
              width: 40,
              height: 40,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 2,
            }}
          />
          <Image
            source={person3Image}
            style={{
              width: 40,
              height: 40,
              position: 'absolute',
              bottom: 0,
              right: 0,
              zIndex: 1,
            }}
          />
        </View>

        {/* Participants List */}
        <View>
          <View>
            <Text style={roomItemStyles.participantName}>
              Andrey Anashkin 💬
            </Text>
            <Text style={roomItemStyles.participantName}>Jakob Povey 💬</Text>
            <Text style={roomItemStyles.participantName}>Petr Kalyanov 💬</Text>
            <Text style={roomItemStyles.participantName}>Thomas Mendoza</Text>
            <Text style={roomItemStyles.participantName}>Shabaz Garrison</Text>
          </View>
          <View>
            <Text style={roomItemStyles.numberParticipantsAndChats}>
              126 👨‍👩‍👦 / 26 💬
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const roomItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,
  },
  boxWithShadow: {
    // iOS only
    shadowColor: '#D0CCBF',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,

    // Android only
    elevation: 1,
  },
  roomTitle: {
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    fontSize: 18,
  },
  participantName: {
    // fontWeight: 'bold',
    color: '#333333',
    fontSize: 17,
  },
  numberParticipantsAndChats: {
    color: '#999999',
    fontSize: 16,
  },
});

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
