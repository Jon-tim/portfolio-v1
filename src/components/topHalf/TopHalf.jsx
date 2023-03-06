import React from "react";
import "./topHalf.scss";
import MakeDate from "../date/Date";

function TopHalf() {
	return (
		<section className="top-half">
			<div className="curve one">
				<h1>
					OLUWATIMILEHIN <br /> AWONIYI
				</h1>
				<p>
					I am a software developer based in Lagos, Nigeria. Some
					times, I use water, keystrokes and algorithms to solve
					problems
					<i>
						<code>-don't even ask me how.</code>
					</i>
					Other times, I use code to build bridges between people and
					technology.
				</p>
			</div>
			<div className="curve two">2. portfolio</div>
			<div className="curve three">
				<h1>OA</h1>
				<>
					<MakeDate />
				</>
			</div>
			<div className="curve four">
				<p>
					Some things are not meant to be disputed in our world. For
					example, it's more fun to have cats than dogs; Tigers,
					though easily back out, are more powerful than Lions; Life
					is, in itself, meaningless, we are the ones striving to make
					meanings and sense out of it! <br />
				</p>
				<br />
				<code>
					If you disagree, ways to reach me are just a scroll away!
				</code>
			</div>
			<div className="curve five">5. random slide show</div>
			<div className="curve six">6. blog</div>
		</section>
	);
}

export default TopHalf;
