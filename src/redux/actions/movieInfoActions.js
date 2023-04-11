import axios from "axios";
const {REACT_APP_API_KEY,REACT_APP_MOVIE_API_URL} = process.env;


export const fetchSingleMovieRequest = () => {
	return {
		type : 'FETCH_SINGLE_MOVIE_REQUEST'
	}
};
export const fetchSingleMovieSuccess = (movieInfo) => {
	return {
		type : 'FETCH_SINGLE_MOVIE_SUCCESS',
		payload:movieInfo
	}
};


export const fetchSingleMovieFailure = (error) => {
	return {
		type : 'FETCH_SINGLE_MOVIE_FAILURE',
		payload:error
	}
};




export const fetchMovieInfo = (movieId) => {

	return (dispatch) => {
		let url = `${REACT_APP_MOVIE_API_URL}movie/${movieId}?api_key=${REACT_APP_API_KEY}&language=en-US`;
		dispatch(fetchSingleMovieRequest());

		axios.get(url)
			.then((res)=>{
				//console.log(res);
				const movieInfo = res.data;
				dispatch(fetchSingleMovieSuccess(movieInfo));

			})
			.catch((err)=>{
				//console.log(err);
				const errorMsg = err.message;
				dispatch(fetchSingleMovieFailure(errorMsg));
			});
	}
};






