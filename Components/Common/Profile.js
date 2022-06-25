import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function Profile() {
  return (
    <View>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('logout clicked');
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;
