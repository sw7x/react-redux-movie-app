const initialState = {
	/*
	movie_info:{
		loading:false,
		info:{},
		error:''
	}
	*/
	movie_info_loading:false,
	movie_info:{},
	movie_info_error:''

};






const movieInfoReducer = (state=initialState,action) => {
	switch (action.type) {
		case 'FETCH_SINGLE_MOVIE_REQUEST':
			return{
				...state,
				movie_info_loading:true,
			};

		case 'FETCH_SINGLE_MOVIE_SUCCESS':
			return{
				movie_info_loading:false,
				movie_info:action.payload,
				movie_info_error:''
			};

		case 'FETCH_SINGLE_MOVIE_FAILURE':
			return{
				movie_info_loading:false,
				movie_info:{},
				movie_info_error:action.payload
			};

		default:
			return state;
	}
};


export default movieInfoReducer;