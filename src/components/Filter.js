// filter.js
export function filterMoviesByTitleAndRating(
	movies,
	titleFilter,
	ratingFilter
) {
	return movies.filter(
		(movie) =>
			movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
			(movie.rating >= parseFloat(ratingFilter) || ratingFilter === "")
	);
}
