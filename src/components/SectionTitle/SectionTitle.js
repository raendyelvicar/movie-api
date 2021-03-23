import React from "react";
import "./SectionTitle.css";

const SectionTitle = (props) => {
	return (
		<>
			<div className="title-text">
				<h2>{props.title}</h2>
			</div>
		</>
	);
};

export default SectionTitle;
