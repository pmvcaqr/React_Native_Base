import LOADINGSCREEN_ACTIONS from "../constants";

export function showLoadingScreen() {
	return {
		type: LOADINGSCREEN_ACTIONS.UPDATE_STATUS,
		isLoading: true,
	};
}

export function hideLoadingScreen() {
	return {
		type: LOADINGSCREEN_ACTIONS.UPDATE_STATUS,
		isLoading: false,
	};
}