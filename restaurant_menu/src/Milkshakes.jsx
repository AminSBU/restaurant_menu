import { useEffect, useState } from 'react';
import './Milkshakes.css'
import Menu from './Menu.jsx'
import milkShakesitemsList from './Milkshakes.json';

function ColdDrinks()
{
    return(
        <>
            <div className="intro-container">
                <Menu items={milkShakesitemsList} />
            </div>
        </>
    );
}
export default ColdDrinks;