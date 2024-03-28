import { Link } from "react-router-dom";
import "./styles.css"
export default function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/table">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/">Logout</Link>
				</li>
			</ul>
		</nav>
	);
}
