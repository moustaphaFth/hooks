import React, { useState } from "react";

export default function CreateMovie() {
	const [newMovie, setNewMovie] = useState({
		title: "",
		description: "",
		posterURL: "",
		rating: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNewMovie({
			...newMovie,
			[name]: value,
		});
	};

	const handleAddClick = () => {
		// Check if all fields are filled
		if (
			newMovie.title &&
			newMovie.description &&
			newMovie.posterURL &&
			newMovie.rating
		) {
			// Store the new movie data in local storage
			const existingMovies = JSON.parse(localStorage.getItem("movies")) || [];
			const updatedMovies = [...existingMovies, newMovie];
			localStorage.setItem("movies", JSON.stringify(updatedMovies));

			// Clear the form
			setNewMovie({
				title: "",
				description: "",
				posterURL: "",
				rating: "",
			});
		} else {
			alert("Please fill in all fields.");
		}
	};

	return (
		<>
			<div>
				<h2>Create a New Movie</h2>
				<form>
					<div>
						<label htmlFor="title">Title:</label>
						<input
							type="text"
							id="title"
							name="title"
							value={newMovie.title}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="description">Description:</label>
						<input
							type="text"
							id="description"
							name="description"
							value={newMovie.description}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="posterURL">Poster URL:</label>
						<input
							type="text"
							id="posterURL"
							name="posterURL"
							value={newMovie.posterURL}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label htmlFor="rating">Rating:</label>
						<input
							type="number"
							id="rating"
							name="rating"
							value={newMovie.rating}
							onChange={handleInputChange}
						/>
					</div>
					<button type="button" onClick={handleAddClick}>
						Add Movie
					</button>
				</form>
			</div>
		</>
	);
}
