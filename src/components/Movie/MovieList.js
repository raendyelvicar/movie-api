import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import AddLikes from "../Likes/AddLikes";
import "./MovieList.css";

const IMAGE_API_URL = "https://image.tmdb.org/t/p/w300";

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	const clickBookmark = (movie) => {
		props.handleBookmarkClick(movie);
	};

	const clickLike = (movie) => {
		props.handleLikeClick(movie);
	};

	return (
		<>
			<div className="movie-container">
				{props.movies &&
					props.movies.map((movie) => (
						<div className="movie" key={movie.id}>
							<div className="hover-img">
								<div className="rate">
									<p className="movie-rate">{movie.vote_average}</p>
								</div>
							</div>
							<FaPlayCircle
								className="play-icon"
								color="red"
								fontSize="54px"
							></FaPlayCircle>
							<FavouriteComponent
								clickEvent={() => clickBookmark(movie)}
							></FavouriteComponent>
							<img src={IMAGE_API_URL + movie.poster_path} alt={movie.title} />
							<div className="movie-info">
								<p className="movie-title">{movie.title}</p>
								<AddLikes />
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default MovieList;
