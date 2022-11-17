import React from 'react';


function Product({label, titel, price, img }) {
    return (
        <>
            <article className="article">
                <span  className="article span">{label}</span>
                <img src={img} alt={titel}/>
                <p className="article-name">{titel}</p>
                <h4>{price}</h4>
            </article>
        </>
    );
}

export default Product;