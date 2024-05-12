import "./Header.css"
import { CiSearch } from "react-icons/ci";

function Header({ countryList }) {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__title">CookRecipes</div>
                <div className="search__bar">
                    <input className="search__input" type="text" placeholder="Search your recipe" />
                    <div className="search__icon"><CiSearch color="black" /></div>
                </div>
                <div className="country__category">{
                    countryList.map(
                        (item, index) =>
                            <li key={index}>
                                {item}
                            </li>
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Header