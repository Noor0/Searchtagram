import {combineReducers} from "redux";

function loginReducer(state=false, action){
	switch(action.type){
		case "LOGGED_IN":
			return true;
		default :
			return state;
	}
}

function accessTokenReducer(state="3551335934.9cb8ce6.172e1a70c8d24a48b03c7b275de23233",action){
	switch(action.type){
		case "LOGGED_IN":
			return action.access_token;
		default :
			return state;
	}
}

function firstFetchFlagReducer(state=false,action){
	switch(action.type){
		case "FETCHING_IMAGES":
			return true;
		default:
			return state
	}
}

// function isFetchingFlagReducer(state=false,action){
// 	switch(action.type){
// 		case "FETCHING_IMAGES":
// 			return true;
// 		case "FETCHED_IMAGES":
// 			return false;
// 		default:
// 			return state;
// 	}
// }

// function hasFetchedFlagReducer(state=false,action){
// 	switch(action.type){
// 		case "FETCHING_IMAGES":
// 			return false;
// 		case "FETCHED_IMAGES":
// 			return true;
// 		default:
// 			return state;
// 	}
// }

function scrapeReducer(state={},action){
	switch(action.type){
		case "FETCHED_IMAGES":
			return{
				latest:action.data.latest,
				top:action.data.top
			};
		default:
			return state;
	}
}

export default combineReducers({
	isLoggedin:loginReducer,
	accessToken:accessTokenReducer,
	firstFetchFlag:firstFetchFlagReducer,
	images:scrapeReducer
	// isFetching:isFetchingFlagReducer,
	// hasFetched:hasFetchedFlagReducer
});