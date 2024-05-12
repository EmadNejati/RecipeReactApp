import React from 'react';
import "./ProductRow.css";
import ProductCard from "../Atoms/ProductCard";

function ProductRow({ categoryTitle, products }) {
    return (
        <div className="product__row">
            <h2 className="category__title">{categoryTitle}</h2>
            <div className='products'>
                {products.map((product, index) => (
                    <ProductCard key={index} productDsc={product.productDsc} productImgUrl={product.productImgUrl} />
                ))}
            </div>
        </div>
    );
}

export default ProductRow;