import React, { useState } from "react";
import "./BookmarkComp.css";

const AddBookmark = (props) => {
	return (
		<>
			<div className="btn-container" onClick={props.clickEvent}>
				<a className="btn bookmark-btn">+ Add</a>
			</div>
		</>
	);
};

export default AddBookmark;
