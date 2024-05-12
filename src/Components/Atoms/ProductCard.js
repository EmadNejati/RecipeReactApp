import "./ProductCard.css"
function ProductCard({productDsc , productImgUrl}){
    return(
        <div className="product__card w-80 h-96 rounded-3xl flex flex-col justify-start items-center bg-orange-400 relative my-0 mx-auto">
            <img src={productImgUrl} className="absolute w-full h-auto top-0 left-0"/>
            <div className="card__dsc text-white rounded-2xl p-5 absolute flex flex-row justify-start items-end w-full h-full bg-gray-500 bg-opacity-70 transition-opacity duration-800">{productDsc}</div>
        </div>
    );

}

export default ProductCard