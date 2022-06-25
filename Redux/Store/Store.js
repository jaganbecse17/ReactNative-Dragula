// Create store variable and export it
// apply MiddleWare like thunk ,saga ,etc...
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import Root_Reducer from './../Reducer/Index_Reducers';
// Root Reducer as combine reducer of all the reducer
export default createStore(Root_Reducer, applyMiddleware(thunk));

//Don't change this most often
