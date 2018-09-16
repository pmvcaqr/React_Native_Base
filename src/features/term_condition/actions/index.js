import TERMCONDITION_ACTIONS from "../constants";

export function acceptTermCondition() {
	return {
		type: TERMCONDITION_ACTIONS.ACCEPT,
		isAccepted: true,
	};
}

export function denyTermCondition() {
	return {
		type: TERMCONDITION_ACTIONS.DENY,
		isAccepted: false,
	};
}