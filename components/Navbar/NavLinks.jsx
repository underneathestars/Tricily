import Link from "next/link";
import { useDataContext } from "../../context/DataContext/dataContext";
import { FaShoppingCart } from "react-icons/fa";
import { cities } from "../../utils/data";


const NavLinks = (props) => {
	const { updateExperiencesData } = useDataContext();

	const handleClickOnExperience = () => {
		const cityId = cities.map((city) => city.id);
		updateExperiencesData(cityId);
		props.isMobile && props.closeMobileMenu();
	};

	return (
		<nav>
			<div>
				<ul>
					<Link
						href="/homepage"
						onClick={() =>
							props.isMobile && props.closeMobileMenu()
						}
					>
						<a>HOME</a>
					</Link>
					<Link
						href="/experiences"
						//onClick={() => props.isMobile && props.closeMobileMenu()} <--- devi wrapparle in una funzione
					>
						<a onClick={handleClickOnExperience}>EXPERIENCES</a>
					</Link>
					<Link
						href="/about"
						onClick={() =>
							props.isMobile && props.closeMobileMenu()
						}
					>
						<a>ABOUT</a>
					</Link>
					<Link
						href="/contact-us"
						onClick={() =>
							props.isMobile && props.closeMobileMenu()
						}
					>
						<a>CONTACTS</a>
					</Link>
					<button
						href="/"
						onClick={() =>
							props.isMobile && props.closeMobileMenu()
						}
					>
						<FaShoppingCart size="22px" color="#fff" />
					</button>
				</ul>
			</div>
		</nav>
	);
};

export default NavLinks;
