import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchMovieInfo} from "../redux/actions/movieInfoActions";

let movie_id;

function MovieSingle({movieInfoData,fetchMovieInfoData}) {

	const {movieId} = useParams();
	let imgBaseUrl = 'https://image.tmdb.org/t/p/original/';
	movie_id = movieId;

	useEffect(()=>{
		fetchMovieInfoData(movie_id);
	},[]);


	return (
		<div>
			{(() => {
				if (movieInfoData.loading) {
					return (
						<h2 className="h2">Loading</h2>
					)
				} else if (movieInfoData.error) {
					return (
						<h2 className="h2">Error</h2>
					)
				} else {
					return (
						<div>
							<section id="banner" className="clearfix" style={{backgroundImage: "url(" + imgBaseUrl + movieInfoData.info.backdrop_path + ")"}}>
								<div id="banner_content_wrapper">
									<div id="poster">
										<img src={imgBaseUrl + movieInfoData.info.poster_path} alt={movieInfoData.info.title} className="featured_image"/>
									</div>
								</div>
							</section>
							<section className="clearfix">
								<div id="" className="content py-5 bg-green-400 font-semibold">
									<h1 className="h1 title bg-blue-200 text-center py-3">{movieInfoData.info.title}</h1>
									<p className="date text-center py-2">{movieInfoData.info.release_date}</p>
									<p className="description text-center py-1 w-4/5 mx-auto">{movieInfoData.info.overview}</p>
									{
										(movieInfoData.info.genres && movieInfoData.info.genres.length > 0) ?
											<div className="text-center pt-2 pb-0">
												{
													(movieInfoData.info.genres).map(genre =>(
														<button type="button" key={genre.id} className="btn btn-warning rounded-pill font-semibold mr-2">{genre.name}</button>
													))
												}
											</div>
											:''
									}
									<p className="text-2xl text-center font-semibold py-3">Average vote : {movieInfoData.info.vote_average}</p>
								</div>
							</section>
						</div>
					)
				}
			})()}
		</div>
	)


}



const mapStateToProps = state =>{
	//console.log(state);
	return {
		movieInfoData : {
			loading:state.movie_info_loading,
			info:state.movie_info,
			error:state.movie_info_error
		}
	}
};



const mapDispatchToProps = (dispatch) =>{
	//console.log(movie_id);
	//default movie id - 634649
	return {
		fetchMovieInfoData: () => dispatch(fetchMovieInfo(movie_id))
	}
};


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MovieSingle);