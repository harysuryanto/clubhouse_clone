import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import moderatorIcon from '../../../assets/icons/moderator.png';
import voiceMutedIcon from '../../../assets/icons/muted-microphone.png';

import person0Image from '../../../assets/images/person0.jpg';
import person1Image from '../../../assets/images/person1.png';
import person2Image from '../../../assets/images/person2.png';
import person3Image from '../../../assets/images/person3.png';
import person4Image from '../../../assets/images/person4.png';
import person5Image from '../../../assets/images/person5.png';
import person6Image from '../../../assets/images/person6.jpg';

export default function ListItemComponent({isModerator, isNewUser, isMuted}) {
  return (
    <View style={styles.container}>
      <View style={styles.speachIndicator}>
        <Image source={person6Image} style={styles.avatar} />

        {/* New user indicator */}
        {isNewUser && (
          <View style={styles.newUserIndicator}>
            <Text style={{fontSize: 14, color: 'black'}}>🎉</Text>
          </View>
        )}

        {/* Voice muted indicator */}
        {isMuted && (
          <View style={styles.voiceMutedIndicator}>
            <Text style={{fontSize: 14, color: 'black'}}>🔇</Text>
          </View>
        )}
      </View>
      <View style={styles.nameContainer}>
        {isModerator && (
          <Image source={moderatorIcon} style={styles.moderatorIcon} />
        )}
        <Text style={styles.nameText}>Andrey</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 30,
    // backgroundColor: 'pink',
  },
  speachIndicator: {
    borderRadius: 34,
    borderWidth: 3,
    borderColor: '#D5CFB9',
    // borderColor: 'red',
    // overflow: 'hidden',
    // marginBottom: 10,
    position: 'relative',
  },
  avatar: {
    width: 75,
    height: 75,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 30,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moderatorIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  nameText: {
    fontSize: 14,
    color: 'black',
  },
  newUserIndicator: {
    padding: 4,
    borderRadius: 100,
    backgroundColor: 'white',
    elevation: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  voiceMutedIndicator: {
    padding: 4,
    borderRadius: 100,
    backgroundColor: 'white',
    elevation: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
