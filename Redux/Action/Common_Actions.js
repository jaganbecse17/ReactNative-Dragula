// import required action types
import {Login, SignUp, Token} from './Action_Types';

// These are the dispatch function name used inside component
// export them
// payload are the data's send dispatched from component To Reducer--Store

export const User_Login = data => ({type: Login, payload: data});
export const User_SignUp = data => ({type: SignUp, payload: data});
export const Auth_Token = data => ({type: Token, payload: data});
