import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";


const cards = [
	{
		image: "https://blog.cognifit.com/wp-content/uploads/2019/10/futbol-1-1200x766.jpg",
		title: "Futbol",
		description: "El primer deporte es el futbol",
	},
	{
		image: "https://cdn.pixabay.com/photo/2022/04/09/15/10/basketball-7121617_1280.jpg",
		title: "Baloncesto",
		description: "El segundo deporte es el baloncesto",
	},
	{
		image: "https://plantillasdeportivas.es/wp-content/uploads/2018/11/tenis-1600x982.jpg",
		title: "Tenis",
		description: "El tercer deporte es el tenis",
	},
	{
		image: "https://as1.ftcdn.net/v2/jpg/05/62/20/00/1000_F_562200080_Nz0xMpxwygukWXJ3t1bdTEjDRx7e3uMe.jpg",
		title: "Hockey",
		description: "El cuarto deporte es el hockey",
	}
];

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			
			<div className="container">
			<Jumbotron />
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
