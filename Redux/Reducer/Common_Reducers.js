// import Required "action types" here
import {Login, SignUp, Token} from '../Action/Action_Types';
// Initial State of the reducer
// include all the Variable/State
const Initial_State = {
  temp: 'variable',
  Login_Details: {},
  SignUp_Details: {},
  Auth_Token: {},
};

// switch case for all action types
// return default state in switch
// always spread existing state
export default function (state = Initial_State, action) {
  const {type, payload} = action;
  switch (type) {
    case 'Action_type': {
      console.log(
        'action_type:\t',
        action.type,
        '\tpayload:\t',
        action.payload,
      );
      return {
        ...state,
        temp: payload,
      };
    }
    case Login: {
      console.log('redux:\t', action);
      return {
        ...state,
        Login_Details: payload,
      };
    }
    case SignUp: {
      return {
        ...state,
        SignUp_Details: payload,
      };
    }
    case Token: {
      return {...state, Auth_Token: payload};
    }
    default:
      return state;
  }
}
