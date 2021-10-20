import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import menuIcon from '../../../assets/icons/menu.png';
import bottomBarBackground from '../../../assets/images/bottom_bar_background.png';

export default function BottomBarComponent() {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={bottomBarBackground}
        resizeMode="cover"
        style={styles.bottomBarBackground}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#55AB67',
              // position: 'absolute',
              // height: 100,
              // marginBottom: 20,
              paddingVertical: 10,
              paddingHorizontal: 35,
              borderRadius: 30,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              + Start a room
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 20,
          }}>
          <Image
            source={menuIcon}
            style={{
              width: 32,
              height: 25,
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBarBackground: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 20,
    // paddingTop: 40,
  },
});
