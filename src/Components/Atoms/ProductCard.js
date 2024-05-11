import "./ProductCard.css"
function ProductCard({productDsc , productImgUrl}){
    return(
        <div className="product__card ">
            <img src={productImgUrl} />
            <div className="card__dsc ">{productDsc}</div>
        </div>
    );

}

export default ProductCard