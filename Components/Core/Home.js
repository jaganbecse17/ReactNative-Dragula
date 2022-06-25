import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {res} from '../../Configuration/Path';
function Home({navigation}) {
  // var resp = res;
  return (
    <View>
      <Text> Core Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Common', {screen: 'About'});
          console.log('clicked');
        }}>
        <Text>Move to About Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // console.log('res clicked\t', res());
          navigation.toggleDrawer();
        }}>
        <Text>toggleDrawer</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;
