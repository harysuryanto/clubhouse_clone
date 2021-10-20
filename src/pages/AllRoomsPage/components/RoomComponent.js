import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import person1Image from '../../../assets/images/person1.png';
import person2Image from '../../../assets/images/person2.png';
import person3Image from '../../../assets/images/person3.png';
import person4Image from '../../../assets/images/person4.png';
import person5Image from '../../../assets/images/person5.png';

export default class RoomComponent extends Component {
  render() {
    return (
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
    );
  }
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
    elevation: 10,
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
