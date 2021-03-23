import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MovieList from "../Movie/MovieList";
import "../App/App.css";

const Bookmarks = (props) => {
	return (
		<>
			<section className="bookmark-section">
				<SectionTitle title="Bookmark" />
				<MovieList
					movies={props.movies}
					handleBookmarkClick={props.removeBookmarkMovie}
					favouriteComponent={props.RemoveBookmark}
				/>
			</section>
		</>
	);
};

export default Bookmarks;
