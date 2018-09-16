import TERMCONDITION_ACTIONS from '../constants';

let initialState = {
  isAccepted: false
};

const termConditionReducers = (state = {}, action) => {
  initialState = state;

  return state;
};

export default function(state = initialState, action) {
	if (action.type === TERMCONDITION_ACTIONS.ACCEPT) {
		return {
			...state,
			isAccepted: true
		};
	}
	if (action.type === TERMCONDITION_ACTIONS.DENY) {
		return {
			...state,
			isAccepted: false
		};
	}
	return state;
}



// export default settingReducers;
