import "./Header.css"
import Navbar from "./Navbar";
import { CiSearch } from "react-icons/ci";

function Header({ countryList }) {
    return (
        <div className="header flex justify-center items-center bg-my_bg_gray text-black w-full h-64">
            <div className="header__container flex flex-col  w-full sm:w-4/5 h-full items-center justify-center sm:flex-row sm:justify-start ">
                <div className="left_header_box flex  flex-col  justify-center items-center w-3/5 sm:items-start">
                    <div className="header__title p-3 text-5xl flex justify-center items-center font-bold ">CookRecipes</div>
                    <div className="country__category list-none w-full flex flex-row justify-center items-center py-3 px-0 sm:justify-start sm:mt-20">{
                        <Navbar countryList={countryList}/>
                    }
                    </div>
                </div>
                <div className="right__header__box flex flex-col justify-center items-center w-full h-auto sm:items-end">
                    <div className="search__bar w-full sm:w-2/3 flex flex-row justify-center items-center max-w-xs">
                        <input className="search__input w-full my-5 h-14 rounded-2xl pl-3" type="text" placeholder="Search your recipe" />
                        <div className="search__icon -ml-7"><CiSearch color="black" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header