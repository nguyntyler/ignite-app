import React, { useEffect } from "react";
import GameDetail from "../components/GameDetails";
//  Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Games";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Home() {
	// Fetch Games
	const dispatch = useDispatch();
	// Loading the state of the game.
	useEffect(() => {
		dispatch(loadGames());
	}, [dispatch]);
	// Get the data back from the state with useSelector. We are extracting directly with the curly.
	const { popular, newGames, upcoming } = useSelector((state) => state.games);

	return (
		<GameList>
			{/* <GameDetail screenshots={}></GameDetail> */}
			<h2>Upcoming Games</h2>
			<Games>
				{/* Now we map all the games using the Games.js component */}
				{upcoming.map((game) => (
					<Game game={game} id={game.id} />
				))}
			</Games>
			<h2>Popular Games</h2>
			<Games>
				{/* Now we map all the games using the Games.js component */}
				{popular.map((game) => (
					<Game game={game} id={game.id} />
				))}
			</Games>
			<h2>New Games</h2>
			<Games>
				{/* Now we map all the games using the Games.js component */}
				{newGames.map((game) => (
					<Game game={game} id={game.id} />
				))}
			</Games>
		</GameList>
	);
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;
	h2 {
		padding: 5rem 0rem;
	}
`;

const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`;
// Repeat as many times of columns you need until all items fit on screen. 500px signifies how large to make the image. If there's extra space, 1fr notes to expand to fill.
