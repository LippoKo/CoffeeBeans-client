import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import Dropdown2 from "../Dropdown/Dropdown";

function Navbar() {
	const { loggedIn, user, logout } = useContext(AuthContext);

	return (
		<div className="Navbar">
			<div className="dropdown dropdown-hover">
				<label className="btn">menu</label>
				<ul
					tabIndex="0"
					className="dropdown-content menu p-6 shadow bg-base-100 rounded-box"
				>
					<li>
						{loggedIn && (
							<>
								<Link to="/profile">Profile</Link>
								<Link to="/profile">Search</Link>
								<Link to="/beansdetails/:beansId">Add Beans</Link>
								<Link to="/profile">Add Shop</Link>
							</>
						)}
					</li>
				</ul>
			</div>
			<Dropdown2 />
			<Link to="/">
				<button className="btn">Home</button>
			</Link>

			{loggedIn && (
				<>
					<Link to="/beanslist">
						<button className="btn">BeansList</button>
					</Link>
					<Link to="/shoplist">
						<button className="btn">ShopList</button>
					</Link>
				</>
			)}

			{!loggedIn && (
				<>
					<Link to="/signup">
						<button className="btn">Signup</button>
					</Link>

					<Link to="/login">
						<button className="btn">Login</button>
					</Link>
				</>
			)}

			{loggedIn && (
				<>
					<button className="btn" onClick={logout}>
						Logout
					</button>
				</>
			)}
		</div>
	);
}

export default Navbar;
