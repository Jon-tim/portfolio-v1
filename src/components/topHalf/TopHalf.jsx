import React from "react";
import "./topHalf.scss";
import MakeDate from "../date/Date";
import { BiLinkExternal } from "react-icons/bi";

function TopHalf() {
	return (
		<section className="top-half">
			<div className="curve one">
				<h1>
					OLUWATIMILEHIN <br /> AWONIYI
				</h1>
				<p>
					A software developer based in Lagos, Nigeria. Some times, I
					use water, keystrokes and algorithms to solve problems
					<i>
						<code> -don't even ask me how. </code>
					</i>
					Other times, I use code to build bridges between people and
					technology.
				</p>
			</div>
			<div className="curve two">2. portfolio</div>
			<div className="curve three">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 920.12 1166.97"
					id="bg"
				>
					<g data-name="Layer 1">
						<g>
							<path
								className="cls-1"
								d="m35.28,776.26h72.84c9.57,0,17.7-6.82,19.59-16.2,31.3-155.15,168.37-271.95,332.71-271.95s301.4,116.8,332.71,271.95c1.89,9.38,10.02,16.2,19.59,16.2h72.84c15.37,0,24.97-16.63,17.29-29.94L477.7,9.98c-7.68-13.31-26.89-13.31-34.57,0L18,746.32c-7.68,13.31,1.92,29.94,17.29,29.94Z"
							/>
							<path
								className="cls-1"
								d="m900.16,834.24H19.96c-11.02,0-19.96,8.94-19.96,19.96s8.94,19.96,19.96,19.96h87.25c9.68,0,17.85,6.96,19.64,16.47,29.57,157.31,167.67,276.34,333.56,276.34s303.99-119.03,333.56-276.34c1.79-9.51,9.96-16.47,19.64-16.47h86.54c11.02,0,19.96-8.94,19.96-19.96s-8.94-19.96-19.96-19.96Z"
							/>
						</g>
					</g>
				</svg>
				<div className="logo-box">
					<svg
						width="50px"
						height="50px"
						id="Layer_2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 920.12 1166.97"
					>
						<g
							id="Layer_1-2"
							data-name="Layer 1"
						>
							<g>
								<path
									className="cls-1"
									d="m35.28,776.26h72.84c9.57,0,17.7-6.82,19.59-16.2,31.3-155.15,168.37-271.95,332.71-271.95s301.4,116.8,332.71,271.95c1.89,9.38,10.02,16.2,19.59,16.2h72.84c15.37,0,24.97-16.63,17.29-29.94L477.7,9.98c-7.68-13.31-26.89-13.31-34.57,0L18,746.32c-7.68,13.31,1.92,29.94,17.29,29.94Z"
								/>
								<path
									className="cls-1"
									d="m900.16,834.24H19.96c-11.02,0-19.96,8.94-19.96,19.96s8.94,19.96,19.96,19.96h87.25c9.68,0,17.85,6.96,19.64,16.47,29.57,157.31,167.67,276.34,333.56,276.34s303.99-119.03,333.56-276.34c1.79-9.51,9.96-16.47,19.64-16.47h86.54c11.02,0,19.96-8.94,19.96-19.96s-8.94-19.96-19.96-19.96Z"
								/>
							</g>
						</g>
					</svg>
				</div>
				<>
					<MakeDate />
				</>
			</div>
			<div className="curve four">
				<p>
					I am quite interested in the roles and application of
					internet of things in the fields of Defence and Agriculture, especially
					in Africa.
					<br />
					<br />
					Sometimes, I put my thoughts on paper in the areas of technology, politics, life and humanity!
				</p>
				<br />
				<code>
					Life is, in itself, meaningless, we are the ones striving to
					make meanings and sense out of it!
				</code>
			</div>
		</section>
	);
}

export default TopHalf;
