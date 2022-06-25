import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function About({navigation}) {
  return (
    <View>
      <Text>About Screen</Text>
      <TouchableOpacity
        onPress={() => {
          // navigation.push('About');
          // navigation.toggleDrawer();
        }}>
        <Text>push screeen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default About;
