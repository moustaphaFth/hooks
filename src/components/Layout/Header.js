import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Link to={"/"} className="nav-link">
								Movie
							</Link>
							<Link to={"/CreateMovie"} className="nav-link">
								Add Movie
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}
