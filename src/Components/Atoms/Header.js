import "./Header.css"
import { CiSearch } from "react-icons/ci";

function Header({ countryList }) {
    return (
        <div className="header flex justify-center items-center bg-gray-400 text-black w-full text-2xl">
            <div className="header__container w-4/5 h-40 items-center">
                <div className="header__title p-3 text-5xl">CookRecipes</div>
                <div className="search__bar flex flex-row justify-end items-center">
                    <input className="search__input w-1/2 h-14 rounded-2xl pl-3" type="text" placeholder="Search your recipe" />
                    <div className="search__icon -ml-7"><CiSearch color="black" /></div>
                </div>
                <div className="country__category list-none w-full flex flex-row py-3 px-0">{
                    countryList.map(
                        (item, index) =>
                            <li className={"ml-3"} key={index}>
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