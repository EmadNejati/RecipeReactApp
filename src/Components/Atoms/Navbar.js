import "./Navbar.css"

function Navbar({ countryList }) {
    return (
        <div className="navbar__container flex flex-row list-none w-full justify-center items-center">
            {countryList.map((country, index) => <li className="navbar__item w-1/6 h-auto mx-4 font-semibold ">{country}</li>
            )}
        </div>
    );

}

export default Navbar