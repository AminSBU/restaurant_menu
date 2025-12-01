import { useEffect, useState } from 'react';
import './Tea.css'
import Menu from './Menu.jsx'
import teaitemsList from './tea.json';

function Tea()
{
    return(
        <>
            <div className="intro-container">
                <Menu items={teaitemsList} />
            </div>
        </>
    );
}
export default Tea;