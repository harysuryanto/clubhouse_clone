import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import AppBarComponent from './components/AppBarComponent';
import BottomBarComponent from './components/BottomBarComponent';
import ListComponent from './components/ListComponent';

export default class RoomPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* App bar */}
        <AppBarComponent navigation={this.props.navigation} />

        {/* List of participants */}
        <ListComponent />

        {/* Bottom bar */}
        <BottomBarComponent navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE5',
  },
});
