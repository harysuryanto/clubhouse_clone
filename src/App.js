import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AllRoomsPage from './pages/AllRoomsPage/AllRoomsPage';
import RoomPage from './pages/RoomPage/RoomPage';
import AppBarComponent from './pages/AllRoomsPage/components/AppBarComponent';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AllRoom">
          <Stack.Screen
            name="AllRoom"
            component={AllRoomsPage}
            options={{
              headerTitle: props => <AppBarComponent />, // Bug
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Room"
            component={RoomPage}
            options={{
              headerShown: false,
              animation: 'slide_from_bottom',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
