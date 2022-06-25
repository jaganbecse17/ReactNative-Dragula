import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
// import utils
import {connect} from 'react-redux';
// keycloak
import {ReactNativeKeycloakProvider} from '@react-keycloak/native';
import keycloak from '../../Configuration/keycloak';
// import StyleSheet
import {Device_Width, Login_style} from '../../StyleSheet/Styles_Sheet';
// import Actions
import {User_Login} from './../../Redux/Action/Common_Actions';

function Login({navigation, User_Login, Login_details}) {
  // local state declarations
  const [User_name, Set_User_Name] = useState();
  const [User_Psd, Set_User_Psd] = useState();

  // useEffect(() => {
  //   console.log('login useeffect.........');
  //   keycloak?.login().then(res => {
  //     console.log('keycloak', keycloak.token);
  //   });
  // }, []);
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{
        redirectUri: 'dragula://home',
        onLoad: 'check-sso',
        // if you need to customize "react-native-inappbrowser-reborn" View you can use the following attribute
        inAppBrowserOptions: {
          // For iOS check: https://github.com/proyecto26/react-native-inappbrowser#ios-options
          // For Android check: https://github.com/proyecto26/react-native-inappbrowser#android-options
        },
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          // backgroundColor: '#ecf0f1',
          backgroundColor: '#ddd',
          padding: 8,
        }}>
        <View style={{backgroundColor: 'gray', height: 150}}>
          <Image
            source={require('./../../Assets/Images/RN_Image.png')}
            style={{resizeMode: 'cover', width: '100%', height: '100%'}}
          />
        </View>
        <View
          style={{
            backgroundColor: 'white',
            height: 300,
            marginHorizontal: 50,
            justifyContent: 'center',
            marginVertical: 48,
          }}>
          <Text style={{marginHorizontal: 24}}> Login</Text>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              paddingVertical: 30,
              // backgroundColor: 'red',
            }}>
            <View>
              <Text>Email</Text>
              <TextInput
                label="Email"
                //   value={'text'}
                onChangeText={text => {
                  Set_User_Name(text);
                }}
                style={Login_style.Input_field}
              />
            </View>
            <View>
              <Text>Password</Text>
              <TextInput
                label="Password"
                //   value={'text'}
                onChangeText={text => {
                  Set_User_Psd(text);
                }}
                style={Login_style.Input_field}
                error={false}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              style={{paddingVertical: 10}}
              onPress={() => {
                User_Login({User_Name: User_name, User_Psd: User_Psd});
                navigation.replace('Root');
              }}>
              <View style={Login_style.Submit_btn}>
                <Text style={{color: 'white'}}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ReactNativeKeycloakProvider>
  );
}

// store data
// store.reducer_name.state_name
const MapStateToProps = Store => {
  return {
    Login_details: Store.Common_Reducers.Login_details,
  };
};
// dispatch function from action which are imported
const MapDipatchToState = {User_Login};

export default connect(MapStateToProps, MapDipatchToState)(Login);
