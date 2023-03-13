import "./app.scss";
import Blogpage from "./pages/blog/blogpage";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/blog"
					element={<Blogpage />}
				/>
			</Routes>
		</div>
	);
}

export default App;
