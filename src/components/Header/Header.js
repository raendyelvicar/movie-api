import React from "react";
import { Link } from "react-router-dom";
import App from "../App/App";
import Bookmarks from "../Bookmarks/Bookmarks";
import Likes from "../Likes/Likes";

import "./Header.css";

const Header = (props) => {
	return (
		<>
			<header>
				<a className="header-logo">flix.net</a>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/popular">Popular</Link>
					</li>
					<li>
						<Link to="/bookmark">Bookmark</Link>
					</li>
					<li>
						<Link to="/recent-likes">Recent Likes</Link>
					</li>
				</ul>

				<form onSubmit={props.submitHandler}>
					<input
						className="search-bar"
						type="text"
						placeholder="Search..."
						value={props.value}
						onChange={(event) => props.setSearchValue(event.target.value)}
					/>
				</form>
			</header>
		</>
	);
};

export default Header;
