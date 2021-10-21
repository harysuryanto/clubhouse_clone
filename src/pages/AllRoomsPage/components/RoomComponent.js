import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import speechIcon from '../../../assets/icons/speech.png';
import speechSolidIcon from '../../../assets/icons/speech-solid.png';
import personSolidIcon from '../../../assets/icons/person-solid.png';

import person1Image from '../../../assets/images/person1.png';
import person2Image from '../../../assets/images/person2.png';
import person3Image from '../../../assets/images/person3.png';
import person4Image from '../../../assets/images/person4.png';
import person5Image from '../../../assets/images/person5.png';

export default function RoomComponent(props) {
  return (
    <RoomGroup>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Room');
        }}>
        <RoomItem />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Room');
        }}>
        <RoomItem />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Room');
        }}>
        <RoomItem />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Room');
        }}>
        <RoomItem />
      </TouchableOpacity>
    </RoomGroup>
  );
}

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
            width: 50 * 2 - 50 / 2, // = (image size * image number) - (image size - half of image size)
            height: 50 * 2 - 50 / 2, // = (image size * image number) - (image size - half of image size)
            marginRight: 10,
          }}>
          <Image
            source={person2Image}
            style={{
              width: 50,
              height: 50,
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 2,
            }}
          />
          <Image
            source={person3Image}
            style={{
              width: 50,
              height: 50,
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
            <View style={roomItemStyles.participantNameContainer}>
              <Text style={roomItemStyles.participantNameText}>
                Andrey Anashkin
              </Text>
              <Image
                source={speechIcon}
                style={roomItemStyles.participantNameIcon}
              />
            </View>
            <View style={roomItemStyles.participantNameContainer}>
              <Text style={roomItemStyles.participantNameText}>
                Jakob Povey
              </Text>
              <Image
                source={speechIcon}
                style={roomItemStyles.participantNameIcon}
              />
            </View>
            <View style={roomItemStyles.participantNameContainer}>
              <Text style={roomItemStyles.participantNameText}>
                Petr Kalyanov
              </Text>
              <Image
                source={speechIcon}
                style={roomItemStyles.participantNameIcon}
              />
            </View>
            <View style={roomItemStyles.participantNameContainer}>
              <Text style={roomItemStyles.participantNameText}>
                Thomas Mendoza
              </Text>
            </View>
            <View style={roomItemStyles.participantNameContainer}>
              <Text style={roomItemStyles.participantNameText}>
                Shabaz Garrison
              </Text>
            </View>
          </View>
          <View style={roomItemStyles.numberParticipantsAndChatsContainer}>
            {/* <Text style={roomItemStyles.numberParticipantsAndChatsText}>
              126 👨‍👩‍👦 / 26 💬
            </Text> */}
            <Text style={roomItemStyles.numberParticipantsAndChatsText}>
              126
            </Text>
            <Image
              source={personSolidIcon}
              style={roomItemStyles.numberParticipantsAndChatsIcon}
            />
            <Text
              style={[
                roomItemStyles.numberParticipantsAndChatsText,
                {margin: 0},
              ]}>
              {' '}
              /{' '}
            </Text>
            <Text style={roomItemStyles.numberParticipantsAndChatsText}>
              26
            </Text>
            <Image
              source={speechSolidIcon}
              style={roomItemStyles.numberParticipantsAndChatsIcon}
            />
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
    borderRadius: 15,
    marginHorizontal: 20,
    marginVertical: 10,
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

    // Additional style
    borderWidth: 0.2,
    borderBottomWidth: 2,
    borderColor: '#D0CCBF',
  },
  roomTitle: {
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    fontSize: 18,
  },
  participantNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
  },
  participantNameText: {
    // fontWeight: 'bold',
    color: '#333333',
    fontSize: 17,
    marginRight: 5,
  },
  participantNameIcon: {
    width: 17,
    height: 17,
  },
  numberParticipantsAndChatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'lightgreen',
  },
  numberParticipantsAndChatsText: {
    color: '#999999',
    fontSize: 16,
    // fontWeight: 'bold',
    marginRight: 5,
  },
  numberParticipantsAndChatsIcon: {
    width: 16,
    height: 16,
  },
});
