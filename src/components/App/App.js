import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import MovieList from "../Movie/MovieList";
import SectionTitle from "../SectionTitle/SectionTitle";
import RemoveBookmark from "../Bookmarks/RemoveBookmark";
import AddBookmark from "../Bookmarks/AddBookmark";
import "./App.css";
import Bookmarks from "../Bookmarks/Bookmarks";

const FEATURED_API_URL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=72015221c1ac66a8d83e03464780b294&page=1";
const SEARCH_API_URL =
	"https://api.themoviedb.org/3/search/movie?api_key=72015221c1ac66a8d83e03464780b294&query=";

function App() {
	const [popularMovies, setPopularMovies] = useState([]);
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [bookmark, setBookmarkList] = useState([]);

	useEffect(() => {
		fetch(FEATURED_API_URL)
			.then((res) => res.json())
			.then((data) => {
				setPopularMovies(data.results);
			});
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (searchValue) {
			fetch(SEARCH_API_URL + searchValue)
				.then((res) => res.json())
				.then((data) => {
					setMovies(data.results);
				});

			setSearchValue("");
		}
	};

	const addBookmarkMovie = (movie) => {
		const newBookmark = [...bookmark, movie];
		setBookmarkList(newBookmark);
	};

	const removeBookmarkMovie = (movie) => {
		const newBookmarkList = bookmark.filter(
			(bookmarked) => bookmarked.id !== movie.id
		);
		setBookmarkList(newBookmarkList);
	};

	return (
		<div className="App">
			<Header
				submitHandler={handleOnSubmit}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>

			{movies.length > 0 && (
				<section className="search-section">
					<SectionTitle title="Search Results" />
					<MovieList
						movies={movies}
						handleBookmarkClick={addBookmarkMovie}
						favouriteComponent={AddBookmark}
					/>
				</section>
			)}

			{bookmark.length > 0 && (
				<Bookmarks
					movies={bookmark}
					removeBookmarkMovie={removeBookmarkMovie}
					RemoveBookmark={RemoveBookmark}
				/>
			)}

			<section className="popular-section">
				<SectionTitle title="Popular" />
				<MovieList
					movies={popularMovies}
					handleBookmarkClick={addBookmarkMovie}
					favouriteComponent={AddBookmark}
				/>
			</section>
		</div>
	);
}

export default App;
