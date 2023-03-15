import React, { useEffect, useState } from "react";
import "./blogpage.scss";
import sanityClient from "../../client";
import BlogNav from "../../components/blogNav/BlogNav";
import BlogUI from "../../components/blogsiteUI/BlogUI";
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

	return (
		<section className="blog-container">
			<BlogNav />
			{/* BLOGSSS */}
			<section className="blog-ui">
				<section className="hero-blog">
					<img
						src={postData && postData[0].mainImage.asset.url}
						alt=""
					/>
					<h1>{postData && postData[0].title}</h1>
				</section>
				<section className="other-blogs">
					{postData &&
						postData.map((post, index) => (
							// <>
							// <hr />
							<BlogUI
								key={index}
								postImg={post.mainImage.asset.url}
								postTitle={post.title}
							/>
							// </>
						))}
				</section>
			</section>
		</section>
	);
}

export default Blogpage;
