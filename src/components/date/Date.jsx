import React, { useEffect, useState } from "react";
import "./date.scss";
function MakeDate() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		let timer = setInterval(() => setDate(new Date()), 1000);

		return function cleanup() {
			clearInterval(timer);
		};
	});
	return (
		<div className="date">
			<p>{date.toLocaleTimeString()}</p>
			<span></span>
			<p>{date.toDateString()}</p>
		</div>
	);
}

export default MakeDate;
