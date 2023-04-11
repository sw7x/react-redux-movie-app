import axios from "axios";

const {REACT_APP_API_KEY,REACT_APP_MOVIE_API_URL} = process.env;




function  loadMovies(type) {
	let url;
	switch(type) {
		case 'trending':
			url = `${REACT_APP_MOVIE_API_URL}trending/movie/day?api_key=${REACT_APP_API_KEY}&language=en-US`;
			break;
		case 'upcoming':
			url = `${REACT_APP_MOVIE_API_URL}movie/upcoming?api_key=${REACT_APP_API_KEY}&language=en-US`;
			break;

		default:
	}


	const dataPromise = axios.get(url)
		.then((res)=>{
			console.log(res);
			return res.data.results
			//setMovies(res.data.results)
		})
		.catch((err)=>{
			console.log(err);
		});

	return dataPromise

}


export default loadMovies;




