import React from "react";
import "./blog-ui.scss";

export default function BlogUI({ postImg, postTitle }) {
	return (
		<section className="blogUI">
			<img
				src={postImg}
				alt=""
			/>
			<h1>{postTitle}</h1>
		</section>
	);
}
