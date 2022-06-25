// import Required "action types" here

// Initial State of the reducer
// include all the Variable/State
const Initial_State = {
  temp: 'variable',
};

// switch case for all action types
// return default state in switch
// always spread existing state
export default function (state = Initial_State, action) {
  switch (action) {
    case 'Action_type': {
      console.log(
        'action_type:\t',
        action.type,
        '\tpayload:\t',
        action.payload,
      );
      return {
        ...state,
        temp: action.payload,
      };
    }

    default:
      return state;
  }
}
