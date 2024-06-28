import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import NotFound from "./NotFound";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				{/* <Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route component={NotFound} /> */}
			</Routes>
		</Router>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
