import {RNKeycloak} from '@react-keycloak/native';

// Setup Keycloak instance as needed
// Pass initialization options as required
const keycloak = new RNKeycloak({
  url: 'http://192.168.112.241:8080/auth/',
  realm: 'Bagic',
  clientId: 'RN',
});
export default keycloak;
