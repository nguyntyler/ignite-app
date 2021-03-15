import axios from "axios";
import { gameDetailsURL } from "../api";

export const loadDetail = (id, short_screenshots) => async (dispatch) => {
	const detailData = await axios.get(gameDetailsURL(id));

	dispatch({
		type: "GET_DETAIL",
		payload: {
			game: detailData.data,
			screens: short_screenshots,
		},
	});
};
