import { useState } from "react";
import "./ProductCard.css"
function ProductCard({ productDsc, productImgUrl }) {

    const [captionStyle,setCaptionStyle]=useState("card__dsc text-white rounded-2xl p-5 flex flex-row justify-start items-end w-full h-full mt-20 z-50  text-2xl font-bold text-my_white ")
    
    const hoverCard=(status)=>{
        
        status===true?setCaptionStyle("card__dsc text-white rounded-2xl p-5 flex flex-row justify-start items-end w-full h-full mt-20 z-50  text-2xl font-bold text-my_dark_gray"):setCaptionStyle("card__dsc text-white rounded-2xl p-5 flex flex-row justify-start items-end w-full h-full mt-20 z-50  text-2xl font-bold text-my_white")
    }


    return (
        <div className="product__card w-full h-auto rounded-3xl flex flex-col items-center justify-center bg-orange-900 relative my-3 mx-3 ">
            <img src={productImgUrl} className="flex  w-3/4 h-auto mt-5" />
            <div className={captionStyle}>{productDsc}</div>
            <div onMouseEnter={()=>{hoverCard(true)}} onMouseLeave={()=>{hoverCard(false)}} className="shadow__layer absolute top-0 left-0 w-full h-full bg-my_dark_gray rounded-2xl opacity-40 hover:opacity-0 transition-opacity duration-500 "></div>
        </div>
    );

}

export default ProductCard