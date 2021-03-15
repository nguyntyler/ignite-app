import React from "react";
// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";

const GameDetail = ({ screenshots }) => {
	// Data
	const { game } = useSelector((state) => state.detail);

	return (
		<div className="card-shadow">
			<div className="detail">
				<div className="stats">
					<div className="rating">
						<h3>{game.name}</h3>
						<p>Rating: {game.rating}</p>
					</div>
					<div className="info">
						<h3>Platforms</h3>
						<div className="platforms">
							{game.platforms.map((data) => (
								<h3 key={data.platform.id}>
									{data.platform.name}
								</h3>
							))}
						</div>
					</div>
				</div>
				<div className="media">
					<img src={game.background_image} alt="image" />
				</div>
				<div className="gallery">
					{screenshots.map((ss) => (
						<img
							key={ss.id}
							src={ss.image}
							alt="screenshots in game"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default GameDetail;
