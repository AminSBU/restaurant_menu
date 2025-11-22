import { useEffect, useState } from 'react';
import './intro.css'
import Menu from './Menu.jsx'
import itemsList from './list.json';

function Intro()
{
    return(
        <>
            <div className="intro-container">
                
                <Menu items={itemsList} />
            </div>
        </>
    );
}
export default Intro;