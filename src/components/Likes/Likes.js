import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MovieList from "../Movie/MovieList";
import "../App/App.css";

const Likes = (props) => {
	return (
		<>
			<section className="likes-section">
				<SectionTitle title="Recent Likes" />
				<MovieList movies={props.movies} handleLikeClick={props.addLikeMovie} />
			</section>
		</>
	);
};

export default Likes;
