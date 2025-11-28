import { useEffect, useState } from 'react';
import './cold-drinks.css'
import Menu from './Menu.jsx'
import coldDrinkitemsList from './cold-drinks.json';

function ColdDrinks()
{
    return(
        <>
            <div className="intro-container">
                <Menu items={coldDrinkitemsList} />
            </div>
        </>
    );
}
export default ColdDrinks;