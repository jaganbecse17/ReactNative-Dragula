import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

function Splash({navigation}) {
  useEffect(() => {
    console.log('Splash screen useeffect....');
    setTimeout(() => {
      navigation.replace('Login');
    }, 1000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
}

export default Splash;
