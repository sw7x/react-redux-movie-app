import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React, {useEffect, useState} from "react";
import loadMovies from "util/loadMovies";


function UpcomingMovies() {
	const [movies,setMovies] = useState([]);

	useEffect(()=>{
		loadMovies('upcoming')
			.then((res)=>{
				console.log(res);
				//return res.data.results
				setMovies(res)
			}).catch((err)=>{
				console.log(err);
			});
	},[]);


    return (
		<section id="slider" className="clearfix">
			<Carousel infiniteLoop={true} autoPlay={true} center="40%">
				{
					(movies).map(movie =>(
						<div className="carousel-item-div" key={movie.id}>
							<img src={'https://image.tmdb.org/t/p/w300_and_h450_face/' + movie.poster_path} />
							<p className="text-base font-semibold legend movie-name">{movie.title}</p>
						</div>
					))
				}
			</Carousel>
		</section>
    );
}


export default UpcomingMovies;































