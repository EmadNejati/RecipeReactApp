import "./Recipe.css"

function Recipe({recipeTitle,recipe}){
    return(
        <div className="recipe__container">
            
            <div className="recipe__title text-2xl font-bold sm:text-4xl sm:font-extrabold sm:mb-3 mt-10">{recipeTitle}</div>
            <div className="recipe__text text-justify  sm:text-lg ">{recipe}</div>
        </div>
    )

}

export default Recipe