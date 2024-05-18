import "./Header.css"
import Navbar from "../Atoms/Navbar";
import { CiSearch } from "react-icons/ci";

function Header({ countryList }) {
    return (
        <div className="header flex justify-center items-center bg-my_bg_gray text-black w-full sm:flex-col">
            <div className="header__container flex flex-col  w-full sm:w-4/5 h-full items-center justify-center sm:flex-col sm:justify-start ">

                <div className="up_header_box flex  flex-col  justify-center items-center w-full sm:flex-row sm:justify-start">
                    <div className="header__title  text-5xl flex justify-center items-center font-bold py-14  ">CookRecipes</div>
                    <div className="search__bar w-full sm:w-2/3 flex flex-row justify-center items-center max-w-xs min-w-44 sm:ml-auto">
                        <input className="search__input w-full my-5 h-14 rounded-2xl pl-3" type="text" placeholder="Search your recipe" />
                        <div className="search__icon -ml-9"><CiSearch color="black" size={30} /></div>
                    </div>
                </div>

                <div className="down__header__box flex w-full h-auto ">
                    <div className="country__category list-none w-full sm:w-1/3 flex flex-row justify-center items-center sm:justify-start  pb-5 ">{
                        <Navbar countryList={countryList} />
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header