import React, { useEffect } from "react";
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
			<h2>Upcoming Games</h2>
			<Games>
				{/* Now we map all the games using the Games.js component */}
				{upcoming.map((game) => (
					<Game
						name={game.name}
						released={game.released}
						id={game.id}
						image={game.background_image}
						key={game.id}
					/>
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
