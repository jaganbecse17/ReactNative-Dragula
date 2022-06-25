import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Common
import Profile from './Common/Profile';
import Splash from './Common/Splash';
import About from './Common/About';
import Login from './Common/Login';
// Core
import Home from './Core/Home';
// Network
import Network from './Network/Network';
// Others
import Others from './Others/Others';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// Comman screen - stack
function Stack_common() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
//   core screens - stack
function Core_Navigation(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={Common_Header(props)}
      />
    </Stack.Navigator>
  );
}
// Network screens - stack
function Network_Navigation() {
  return (
    <Stack.Navigator screenOptions={Common_Header('Network Main Screen')}>
      <Stack.Screen name="Home" component={Network} />
    </Stack.Navigator>
  );
}
//Others Screen - Stack
function Others_Navigation() {
  return (
    <Stack.Navigator screenOptions={Common_Header('Others Main Screen')}>
      <Stack.Screen name="Home" component={Others} />
    </Stack.Navigator>
  );
}
// root view screen - drawer navigations
function Drawer_Navigation() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Core" component={Core_Navigation} />
      <Drawer.Screen name="Network" component={Network_Navigation} />
      <Drawer.Screen name="Others" component={Others_Navigation} />
    </Drawer.Navigator>
  );
}

export default function Root_navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Common"
        component={Stack_common}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Root"
        component={Drawer_Navigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

// Header Part
const Common_Header = props => ({
  headerStyle: {
    backgroundColor: '#ddd',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => (
    <View>
      <Icon
        name="person-outline"
        type="MaterialIcons"
        size={32}
        color={'#7A7A7A'}
        onPress={() => {
          console.log('icon clicked');
          props.navigation.navigate('Common', {screen: 'Profile'});
        }}
      />
    </View>
  ),
});
