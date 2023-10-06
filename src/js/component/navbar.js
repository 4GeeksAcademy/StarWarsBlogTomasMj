import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img src=" https://cdn.iconscout.com/icon/free/png-512/free-starwars-225970.png?f=webp&w=256" className="img-fluid mx-5" style={{width: "100px", height: "100px"}} alt="..."/>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
				<div className="dropdown mx-5">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu">
						{store.favorites.map ((item) =>{
							return (
								<li><a className="dropdown-item" href="#">{item} <button onClick={(e)=> { 
									e.stopPropagation()
									actions.deleteFavorite(item)} } >x</button> </a></li>
							)
						})}
						

					</ul>
				</div>
				</Link>
				
			</div>
			




		</nav>
	);
};
