import axios from "axios";

const initState = {
	popular: [],
	newGames: [],
	upcoming: [],
};
// These states are what is shown in redux's states. If we have more, we just create new files similar to this and add it to index.js

const gamesReducer = (state = initState, action) => {
	switch (action.type) {
		case "FETCH_GAMES":
			return { ...state };
		// { ..state, userData }
		default:
			return { ...state };
	}
};

// Actions are objects that describe what is going to happen. It uses the reducer to know what happens.
// Action creator is a function that returns an action.
/*
const fetchGames = (userData) => {
    return {
        type: 'FETCH_GAMES',
        payload: userData
    };
};

Running fetchGames(); will return the action itself.

Action creators are most commonly used. 

Parameters in the 
*/
// Redux Thunk. Vanilla redux does not have asynchnous features to use with api. Thunk allows asychronous fetching.

export default gamesReducer;
