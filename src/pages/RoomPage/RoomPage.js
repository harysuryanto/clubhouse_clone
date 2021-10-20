import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class RoomPage extends Component {
  render() {
    return (
      <View>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
