import { useState } from "react";
import "./ProductCard.css"
function ProductCard({ productDsc, productImgUrl }) {

    const [captionStyle, setCaptionStyle] = useState("card__dsc absolute bottom-0 left-0 text-white rounded-2xl p-5 flex flex-row justify-start items-end  mt-20 z-50  text-2xl font-bold text-my_white ")

    const [cardStyle, setCardStyle] = useState("product__card relative w-full h-96 rounded-3xl flex flex-col items-center justify-center bg-orange-900 relative my-3 mx-3 ")

    const hoverCard = (status) => {

        if (status === true) {
            setCaptionStyle("card__dsc  absolute bottom-0 left-0 text-white rounded-2xl p-5 flex flex-row justify-start items-end  mt-20 z-50  text-2xl font-bold text-my_dark_gray w-full ");

            setCardStyle("product__card w-full relative h-96 rounded-3xl flex flex-col items-center justify-center bg-orange-900 relative my-3 mx-3 border-1 border-my_dark_gray shadow-2xl ");
        }
        else {
            setCaptionStyle("card__dsc text-white rounded-2xl absolute bottom-0 left-0 p-5 flex flex-row justify-start items-end  mt-20 z-50  text-2xl font-bold text-my_white w-full");

            setCardStyle("product__card w-full h-96 relative rounded-3xl flex flex-col items-center justify-center bg-orange-900 relative my-3 mx-3 ");
        }

    }

    return (
        <div className={cardStyle}>
            <img src={productImgUrl} className="flex  w-full h-full rounded-3xl  absolute top-0 left-0" />
            <div className={captionStyle}>{productDsc}</div>
            <div onMouseEnter={() => { hoverCard(true) }} onMouseLeave={() => { hoverCard(false) }} className="shadow__layer absolute top-0 left-0  w-full h-full bg-my_dark_gray rounded-2xl opacity-40 hover:opacity-0 transition-opacity duration-500 "></div>
        </div>
    );

}

export default ProductCard