import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AllRoomsPage from './pages/AllRoomsPage/AllRoomsPage';
import RoomPage from './pages/RoomPage/RoomPage';

// const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return <AllRoomsPage />;
  }
}
{
  /* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllRoomsPage" component={AllRoomsPage} />
          <Stack.Screen name="RoomPage" component={RoomPage} />
        </Stack.Navigator>
      </NavigationContainer> */
}
