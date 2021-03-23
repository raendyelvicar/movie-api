import React, { useState } from "react";
import "./BookmarkComp.css";

const RemoveBookmark = (props) => {
	return (
		<>
			<div className="btn-container" onClick={props.clickEvent}>
				<a className="btn bookmark-btn">- Remove</a>
			</div>
		</>
	);
};

export default RemoveBookmark;
