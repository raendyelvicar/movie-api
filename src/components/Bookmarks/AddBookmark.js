import React from "react";
import "./BookmarkComp.css";

const AddBookmark = (props) => {
	return (
		<>
			<div className="btn-container">
				<a className="btn bookmark-btn" onClick={props.clickEvent}>
					+ Add
				</a>
			</div>
		</>
	);
};

export default AddBookmark;
