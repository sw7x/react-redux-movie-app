import MovieThumb from "components/MovieThumb";
import React, {useEffect, useState} from "react";
import loadMovies from "util/loadMovies";


function Home() {



	const [movies,setMovies] = useState([]);

	useEffect(()=>{

		loadMovies('trending')
			.then((res)=>{
				console.log(res);
				//return res.data.results
				setMovies(res)
			}).catch((err)=>{
				console.log(err);
			});
	},[]);



    return (
    	<div>
			<div className="py-3">
				<h1 className="h1 font-bold m-auto text-center">Trending Movies</h1>
			</div>

			<section className="mb-5">
				<div className="container-fluid mt-0 px-5">
					<div id="movie-content" className="row d-flex justify-content-center">
						{
							(movies).map(movie =>(
								<MovieThumb  key={movie.id} movieInfo={movie}/>
							))
						}
					</div>
				</div>
			</section>

		</div>
    );
}

export default Home;