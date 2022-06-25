/**
 * @description Project with most of the RN concepts
 * @Refer excel sheet
 * @author Jagan S
 */

import React from 'react';
import {LogBox} from 'react-native';
import 'react-native-gesture-handler';
// navigation navigators
import {NavigationContainer} from '@react-navigation/native';
import Root_navigation from './Components/Navigation';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import Store from './Redux/Store/Store';

import keycloak from './Configuration/keycloak';

// keycloak.updateToken(30).then(res => {
//   console.log('token...', res);
// // });
// setInterval(() => {
//   keycloak.onTokenExpired = () =>
//     keycloak.updateToken(30).then(res => {
//       console.log('token...', res);
//       console.log('access token', keycloak.token);
//     });
// }, 60000);

LogBox.ignoreAllLogs();
function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          // backgroundColor="lightgreen"
        />
        <Root_navigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
