// App.js
import React from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import ShowMovie from "./components/ShowMovie";
import CreateMovie from "./components/CreateMovie";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path={"/"} element={<ShowMovie />} />
				<Route path={"/CreateMovie"} element={<CreateMovie />} />
			</Routes>
		</>
	);
}

export default App;
