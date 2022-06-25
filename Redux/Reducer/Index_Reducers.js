import {combineReducers} from 'redux';
// import All Reducer and combine them
import Network_Reducers from './Network_Reducers';
import Common_Reducers from './Common_Reducers';
import Others_Reducers from './Others_Reducers';
import Core_Reducers from './Core_Reducers';
// combineReducers(reducer1,reducer2,...) as object
// export default it
export default combineReducers({
  Core_Reducers,
  Network_Reducers,
  Others_Reducers,
  Common_Reducers,
});
