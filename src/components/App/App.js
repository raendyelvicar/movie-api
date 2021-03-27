import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import MovieList from "../Movie/MovieList";
import SectionTitle from "../SectionTitle/SectionTitle";
import RemoveBookmark from "../Bookmarks/RemoveBookmark";
import AddBookmark from "../Bookmarks/AddBookmark";
import "./App.css";
import Bookmarks from "../Bookmarks/Bookmarks";
import Popular from "../Popular/Popular";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Likes from "../Likes/Likes";

const SEARCH_API_URL =
	"https://api.themoviedb.org/3/search/movie?api_key=72015221c1ac66a8d83e03464780b294&query=";

const FEATURED_API_URL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=72015221c1ac66a8d83e03464780b294&page=1";

function App() {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState("");
	const [bookmark, setBookmarkList] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [likeMovies, setLikeList] = useState([]);

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

	useEffect(() => {
		fetch(FEATURED_API_URL)
			.then((res) => res.json())
			.then((data) => {
				setPopularMovies(data.results);
			});
	}, []);

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

	const addLikeMovie = (movie) => {
		const newLike = [...likeMovies, movie];
		setLikeList(newLike);
	};

	const removeLikeMovie = (movie) => {
		const newLikeList = likeMovies.filter((liked) => liked.id !== movie.id);
		setBookmarkList(newLikeList);
	};

	return (
		<Router>
			<div className="App">
				<Header
					submitHandler={handleOnSubmit}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>

				<Switch>
					<Route path="/popular">
						<Popular
							movies={popularMovies}
							addBookmarkMovie={addBookmarkMovie}
							AddBookmark={AddBookmark}
						/>
					</Route>

					<Route path="/bookmark">
						<Bookmarks
							movies={bookmark}
							removeBookmarkMovie={removeBookmarkMovie}
							RemoveBookmark={RemoveBookmark}
						/>
					</Route>
					<Route path="/recent-likes">
						<Likes movies={likeMovies} addLikeMovie={addLikeMovie} />
					</Route>
				</Switch>
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
			</div>
		</Router>
	);
}

export default App;
