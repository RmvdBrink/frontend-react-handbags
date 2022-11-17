import React from 'react';

function Tile({img, title, children }) {
    return (
        <section className="section">
            {img && <img src={img} alt={title}/>}
            <h2>{title}</h2>
            {children}

        </section>
    );
}

export default Tile;