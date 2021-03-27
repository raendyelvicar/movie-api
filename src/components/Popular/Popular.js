import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "../App/App.css";
import MovieList from "../Movie/MovieList";

const Popular = (props) => {
	return (
		<>
			<section className="popular-section">
				<SectionTitle title="Popular" />
				<MovieList
					movies={props.movies}
					handleBookmarkClick={props.addBookmarkMovie}
					favouriteComponent={props.AddBookmark}
				/>
			</section>
		</>
	);
};

export default Popular;
