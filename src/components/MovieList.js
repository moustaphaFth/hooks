// MovieList.js
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { filterMoviesByTitleAndRating } from "./Filter";

export default function MovieList({ titleFilter, ratingFilter }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		// Retrieve movies from local storage
		const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
		setMovies(storedMovies);
	}, []);

	// Filter movies based on title and rating criteria
	const filteredMovies = filterMoviesByTitleAndRating(
		movies,
		titleFilter,
		ratingFilter
	);

	return (
		<div className="movie-list">
			{filteredMovies.map((movie, index) => (
				<MovieCard key={index} {...movie} />
			))}
		</div>
	);
}
