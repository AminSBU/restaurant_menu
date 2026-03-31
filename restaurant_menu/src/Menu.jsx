import React, { useState } from 'react';
import './Menu.css';

function Menu({ items }) {
    const [isQuantityInputVisible, setIsQuantityInputVisible] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const addToCardHandle = (qty) => {
        // This function would typically be used to add items to a cart.
        // You can replace this with your own logic (e.g., updating state or calling a parent function).
        console.log(`Adding ${qty} of item`);
    };

    const handleAdd = () => {
        addToCardHandle(quantity);
        setIsQuantityInputVisible(false);
        setQuantity(1);
    };

    const handleIncrease = () => {

    }

    return (
        <>
            <div className="menu-grid">
                {items.map((item, index) => (
                    <div key={index} className="menu-card">
                        <h3 className="menu-title">{item.title}</h3>
                        <img 
                            src={item.image}
                            className="menu-image"
                            loading="lazy"
                        />
                        <button 
                            className="rounded-full bg-orange-600 px-3 py-1 text-white font-medium hover:bg-amber-500 transition" 
                            onClick={() => setIsQuantityInputVisible(true)}
                        >
                            +
                        </button>
                        <p className="menu-description">{item.description}</p>
                        <div className="menu-price">
                            {item.price.toLocaleString('fa-IR')} تومان
                        </div>
                        <div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Menu;
