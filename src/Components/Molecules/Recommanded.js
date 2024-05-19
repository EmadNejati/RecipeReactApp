import "./Recommanded.css"
import Recipe from "../Atoms/Recipe"
import { MdOutlineDoubleArrow } from "react-icons/md";

function Recommanded({imageUrl,recommandedTitle,recommandedText}){
    return(
        <div className="recomanded__recipe flex sm:w-4/5 flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-center sm:my-20 ">
            <div className=" font-bold text-xl sm:text-2xl sm:font-extrabold sm:w-1/5 flex sm:justify-start sm:items-center my-7 ">TODAY RECOMMENDATION</div>
            <div className="img__holder flex justify-center w-4/5 items-centersm:w-2/5 sm:mx-20"><img className="sm:w-4/5 rounded-full " src={imageUrl} /></div>
            <div className="recipe__holder w-4/5 sm:w-2/5"><Recipe recipeTitle={recommandedTitle} recipe={recommandedText} /></div>

        </div>
    )
}

export default Recommanded