import React from "react";
import Card from "react-bootstrap/Card";

export default function MovieCard(props) {
	return (
		<>
			<Card className="movie-card" style={{ width: "18rem" }}>
				<Card.Img variant="top" src={props.posterURL} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Subtitle>{props.rating}</Card.Subtitle>
					<Card.Text>{props.description}</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
}
