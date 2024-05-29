import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar({ countryList }) {
    return (
        <div className="navbar__container flex flex-row list-none w-full justify-center items-center">
            {countryList.map((country, index) => <Link to="Country" key={index} className="navbar__item w-1/6 h-auto mx-2 font-semibold text-md lg:text-xl flex justify-center items-center">{country}</Link>
            )}
        </div>
    );

}

export default Navbar