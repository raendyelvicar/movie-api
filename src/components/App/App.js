import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./App.css";

const FEATURED_API_URL =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=72015221c1ac66a8d83e03464780b294&page=1";
const SEARCH_API_URL =
	"https://api.themoviedb.org/3/search/movie?api_key=72015221c1ac66a8d83e03464780b294&query=";

function App() {
	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		fetch(FEATURED_API_URL)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setMovies(data.results);
			});
	}, []);

	const handleOnSubmit = (e) => {
		e.preventDefault();
		if (searchValue) {
			fetch(SEARCH_API_URL + searchValue)
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setMovies(data.results);
				});

			setSearchValue("");
		}
	};

	const handleOnChange = (e) => {
		e.preventDefault();
		setSearchValue(e.target.value);
	};

	return (
		<div className="App">
			<header>
				<ul>
					<li>
						<a href="#">Bookmarks</a>
					</li>
					<li>
						<a href="#">Recent Likes</a>
					</li>
				</ul>
				<form onSubmit={handleOnSubmit}>
					<input
						className="search-bar"
						type="text"
						placeholder="Search..."
						value={searchValue}
						onChange={handleOnChange}
					/>
				</form>
			</header>

			<section className="movie-section">
				<div className="title-text">
					<h2>Popular</h2>
				</div>
				<div className="movie-container">
					{movies.length > 0 &&
						movies.map((movie) => <Movie key={movie.id} {...movie}></Movie>)}
				</div>
			</section>
		</div>
	);
}

export default App;
