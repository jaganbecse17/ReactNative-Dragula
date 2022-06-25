import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Text_Style} from '../../StyleSheet/Styles_Sheet';
function Others() {
  return (
    <View>
      <Text style={Text_Style.Head}>Others Screen</Text>
      <TouchableOpacity
        onPress={() => {
          console.log('Others clicked');
        }}>
        <Text style={Text_Style.Title}>Others</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Others;
