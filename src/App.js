
import './App.css';


import React from "react";
import Footer from "components/Footer";
import Header from "components/Header";
import Home from "components/Home";
import MovieSingle from "components/MovieSingle";
import UpcomingMovies from "components/UpcomingMovies";
import PageNotFound from 'components/PageNotFound';


import {Routes,Route} from 'react-router-dom';


import {Provider} from 'react-redux'
import store from "redux/store";




function App()
{
	return (

		<Provider store={store}>
			<div className="App">
				<Header/>
				<Routes>
					<Route exact path="/" element={<Home/>} />
					<Route path="/movie/:movieId" element={<MovieSingle/>}/>
					<Route path="/upcoming-movies" element={<UpcomingMovies/>}/>
					<Route path="*" element={<PageNotFound/>} />
				</Routes>
				<Footer/>
			</div>
		</Provider>

	);
}

export default App;
