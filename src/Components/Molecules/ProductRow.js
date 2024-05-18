import React from 'react';
import "./ProductRow.css";
import ProductCard from "../Atoms/ProductCard";

function ProductRow({ categoryTitle, products }) {
    return (
        <div className="product__row flex flex-col justify-center items-center w-4/5  mx-0 sm:mx-auto ">
            <h2 className="category__title flex items-center rounded-3xl  w-full h-32 mx-auto text-2xl  font-bold">{categoryTitle}</h2>
            <div className='products w-full flex flex-col justify-center items-center mx-0 my-auto sm:flex-row'>
                {products.map((product, index) => (
                    <ProductCard key={index} productDsc={product.productDsc} productImgUrl={product.productImgUrl} />
                ))}
            </div>
        </div>
    );
}

export default ProductRow;