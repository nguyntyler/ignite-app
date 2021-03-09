import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
	// Fetch with axios
	const popularData = await axios.get(popularGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	const upcomingGamesData = await axios.get(upcomingGamesURL());

	// Payload should look like the init state inside games reducer. We are setting the state as soon as we start up the application
	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingGamesData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};
