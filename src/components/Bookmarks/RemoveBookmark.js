import React, { useState } from "react";
import "./BookmarkComp.css";

const RemoveBookmark = (props) => {
	return (
		<>
			<div className="btn-container">
				<a className="btn bookmark-btn" onClick={props.clickEvent}>
					- Remove
				</a>
			</div>
		</>
	);
};

export default RemoveBookmark;
