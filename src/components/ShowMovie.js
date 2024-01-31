import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";

export default function ShowMovie() {
	const [titleFilter, setTitleFilter] = useState("");
	const [ratingFilter, setRatingFilter] = useState("");
	const [movies, setMovies] = useState([]);

	const handleTitleChange = (event) => {
		setTitleFilter(event.target.value);
	};

	const handleRatingChange = (event) => {
		setRatingFilter(event.target.value);
	};

	useEffect(() => {
		// Retrieve movies from local storage
		const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
		setMovies(storedMovies);
	}, []); // The empty dependency array ensures this effect runs once on component mount

	return (
		<div className="App">
			<h1 className="text-center">Movie List</h1>
			<div className="filters">
				<label htmlFor="titleFilter">Title:</label>
				<input
					type="text"
					id="titleFilter"
					value={titleFilter}
					onChange={handleTitleChange}
				/>
				<label htmlFor="ratingFilter">Rating:</label>
				<input
					type="number"
					id="ratingFilter"
					value={ratingFilter}
					onChange={handleRatingChange}
				/>
			</div>
			<MovieList
				titleFilter={titleFilter}
				ratingFilter={ratingFilter}
				movieList={movies}
			/>
		</div>
	);
}
