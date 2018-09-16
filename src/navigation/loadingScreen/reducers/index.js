import LOADINGSCREEN_ACTIONS  from '../constants';

let initialState = {
  isLoading: false
};

const loadingScreenReducers = (state = {}, action) => {
  initialState = state;

  return state;
};

export default function(state = initialState, action) {
	if (action.type === LOADINGSCREEN_ACTIONS.UPDATE_STATUS) {
		return {
			...state,
			isLoading: action.isLoading
		};
	}
	return state;
}



// export default settingReducers;
