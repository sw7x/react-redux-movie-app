import { NavLink } from "react-router-dom";

function Nav() {

    return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark p-0">
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item px-2 ml-4">
						<NavLink className="nav-link font-semibold text-white hover:bg-gray-500" to="/">Home</NavLink>
					</li>
					<li className="nav-item px-2">
						<NavLink className="nav-link font-semibold text-white hover:bg-gray-500" to="upcoming-movies">Upcoming Movies</NavLink>
					</li>
				</ul>
			</div>
		</nav>
    );
}



export default Nav;