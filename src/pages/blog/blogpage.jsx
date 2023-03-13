import React, { useEffect, useState } from "react";
import "./blogpage.scss";
import sanityClient from "../../client";
import BlogNav from "../../components/blogNav/BlogNav";
function Blogpage() {
	const [postData, setPost] = useState(null);
	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{
        title,
        slug,
        mainImage{
            asset->{
                _io,
                url
            },
            alt
        }
      }`
			)
			.then((data) => setPost(data))
			.catch(console.error);
	}, []);
	// console.log(postData);

	return (
		<section className="blog-container">
			<BlogNav />
		</section>
	);
}

export default Blogpage;
