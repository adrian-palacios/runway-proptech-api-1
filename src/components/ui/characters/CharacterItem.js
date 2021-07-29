import React from "react";

const CharacterItem = ({ item }) => {
	return (
		<div className="card">
			<div className="card-inner">
				<div className="card-front">
					<img src={item.images.sm} alt="" />
				</div>
				<div className="card-back">
					<h1>{item.name}</h1>
					<ul>
						<li>
							<strong>Actor Name:</strong> {item.name}
						</li>
						<li>
							<strong>Nickname:</strong> {item.slug}
						</li>
						<li>
							<strong>Strength:</strong> {item.powerstats.strength}
						</li>
						<li>
							<strong>Intelligence:</strong> {item.powerstats.intelligence}
						</li>
						<li>
							<strong>Combat:</strong> {item.powerstats.combat}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CharacterItem;
