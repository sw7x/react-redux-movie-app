import {Link} from "react-router-dom";

function MovieThumb(props) {

    return (
		<div className="col-xs-12 col-sm-4 col-md-3 col-lg-2 px-2 pb-5">
			<div className="movie-card">
				<Link to={"/movie/" + props.movieInfo.id}>
					<img className="img-fluid movie-img" src={'https://image.tmdb.org/t/p/w300_and_h450_face/' + props.movieInfo.poster_path} alt=""/>
					<div className="movie-description p-1 justify-content-between align-items-center">
						<h6 className="h6 movie-title text-center">{props.movieInfo.title}</h6>
						<h6 className="h6 movie-title text-center">{}</h6>
					</div>
				</Link>
			</div>
		</div>
    );
}



export default MovieThumb;