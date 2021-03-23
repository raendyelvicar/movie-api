import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Globe from "../../Globe";
import "./Movie.css";

const IMAGE_API_URL = "https://image.tmdb.org/t/p/w300";

const Movie = ({ id, title, poster_path, overview, vote_average }) => {
	return (
		<div className="movie">
			<div className="hover-img">
				<div className="rate">
					<p className="movie-rate">{vote_average}</p>
				</div>
			</div>
			<FaPlayCircle
				className="play-icon"
				color="red"
				fontSize="54px"
			></FaPlayCircle>
			<img src={IMAGE_API_URL + poster_path} alt={title} />
			<div className="movie-info">
				<p className="movie-title">{title}</p>
				<Globe id={id} />
			</div>
		</div>
	);
};

export default Movie;
