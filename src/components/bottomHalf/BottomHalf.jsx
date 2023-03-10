import React from "react";
import "./bottomHalf.scss";
import github from "../../assets/images/github-mark.png";
import { BiLinkExternal } from "react-icons/bi";

function BottomHalf() {
	const date = new Date();
	let year = date.getFullYear();
	return (
		<section className="bottom-half">
			<div className="curve one-two">
				<div className="curve one">about me</div>
				<div className="curve two">picture</div>
			</div>
			<div className="curve three">
				<a
					href="#"
					className="blog-top"
				>
					<div className="blog-link">
						<p>BLOG</p>
					</div>
					<div>
						<h3>
							MY PEN TO PAPER IS: <span>LETHAL</span>
						</h3>
						<BiLinkExternal className="link-icon" />
					</div>
				</a>
			</div>
			<div className="curve four contact">
				<h3>Just a click away:</h3>
				<div className="icons">
					<a
						href=""
						target="_blank"
					>
						<svg
							className="twitter"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<path
								fill="#03A9F4"
								d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
							></path>
						</svg>
					</a>
					<a
						href="https://github.com/Jon-tim"
						target="_blank"
					>
						<img
							src={github}
							className="github"
							alt="github"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/oluwatimilehin-awoniyi/"
						target="_blank"
					>
						<svg
							className="linkedin"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<path
								fill="#0288D1"
								d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
							></path>
							<path
								fill="#FFF"
								d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
							></path>
						</svg>
					</a>
					<a
						href=""
						target="_blank"
					>
						<svg
							className="gmail"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="48"
							height="48"
							viewBox="0 0 48 48"
						>
							<path
								fill="#4caf50"
								d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
							></path>
							<path
								fill="#1e88e5"
								d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
							></path>
							<polygon
								fill="#e53935"
								points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
							></polygon>
							<path
								fill="#c62828"
								d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
							></path>
							<path
								fill="#fbc02d"
								d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
							></path>
						</svg>
					</a>
				</div>
				<hr />
				<div className="copyright">
					<code>Developed with love</code>
					<code>{year}</code>
				</div>
			</div>
		</section>
	);
}

export default BottomHalf;
