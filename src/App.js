import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';

import AllRoomsPage from './pages/AllRoomsPage';

import AppBarComponent from './components/AppBarComponent';

import menuIcon from './assets/icons/menu.png';
import bottomBarBackground from './assets/images/bottom_bar_background.png';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* App bar */}
        <View style={styles.appBar}>
          <AppBarComponent />
        </View>

        {/* Body */}
        <View style={styles.body}>
          {/* Content */}
          <View style={styles.content}>
            <ScrollView>
              <AllRoomsPage />
            </ScrollView>
          </View>

          {/* Bottom bar */}
          <View style={styles.bottomBar}>
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // position: 'relative',
    backgroundColor: '#F1EFE5',
    // alignContent: 'stretch',
  },
  appBar: {
    // position: 'absolute',
    // backgroundColor: 'lightgreen',
    // top: 0,
    // left: 0,
    // right: 0,
    padding: 30,
  },
  body: {
    flex: 1,
    position: 'relative',
    // paddingBottom: 100,
  },
  content: {
    flex: 1,
  },
  bottomBar: {
    position: 'absolute',
    flexDirection: 'row',
    // backgroundColor: 'black',
    // height: 44 + 40,
    bottom: 0,
    left: 0,
    right: 0,
  },
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
