import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function Network() {
  return (
    <View>
      <Text>Network Screen</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('clicked');
        }}>
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Network;
