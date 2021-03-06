import React from "react";
// Styling and Animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux import
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ game }) => {
	const {
		name,
		released,
		background_image,
		clip,
		id,
		short_screenshots,
	} = game;
	// Load Details
	const dispatch = useDispatch();
	const loadDetailHandler = () => {
		dispatch(loadDetail(id, short_screenshots));
		// This is the action that gets the url and detail. It gets the id from the individual components and makes another call.
	};
	// console.log(screenshots);
	return (
		<StyledGame onClick={loadDetailHandler}>
			<h3>{name}</h3>
			<p>{released}</p>
			<img src={background_image} alt={name} />
		</StyledGame>
	);
};

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	overflow: hidden;
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`;

export default Game;
