import {StyleSheet, Dimensions} from 'react-native';

// Device Details
export const Device_Width = Dimensions.get('screen').width;
export const Device_height = Dimensions.get('screen').height;

const Text_Style = StyleSheet.create({
  Head: {
    fontSize: Device_Width * 0.045,
    fontWeight: 'bold',
  },
  Title: {
    fontSize: Device_Width * 0.033,
    fontWeight: 'bold',
  },
  Body: {
    fontSize: Device_Width * 0.033,
  },
});

// page wise styles
const Login_style = StyleSheet.create({
  Input_field: {
    width: Device_Width * 0.52,
    height: Device_Width * 0.075,
    fontSize: Device_Width * 0.03,
    padding: 0,
    backgroundColor: '#ddd',
    paddingLeft: 8,
    borderRadius: 4,
    marginVertical: 8,
  },
  Submit_btn: {
    backgroundColor: 'rgba(98,0,238,.7)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
});
// export statment
export {Text_Style, Login_style};
