const intialstate = {
    username:'Atul',
    password:'123',
		userIndentity:[],
		images:[]
}

const reducer = (state = intialstate,action) => {
	const tempState = JSON.parse(JSON.stringify(state));
	if (action.type === "IS_USER_LOGIN") {
			tempState.userIndentity.push({
				uniqueId: action.payload.uniqueId,
				state: action.payload.loginState
			});
			return {
				...tempState
			};
		}
		if (action.type === "GET_IMAGES") {
			tempState.images = action.payload;
			return {
				...tempState
			};
		}
		return state;
} 

export default reducer;