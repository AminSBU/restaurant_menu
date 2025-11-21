import { useEffect, useState } from 'react';
import './intro.css'
import Menu from './Menu.jsx'

function Intro()
{
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('/list.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMenuItems(data);
            })
            .catch(error => {   
                console.error('Error fetching the menu:', error);
            });
    }, []);

    return(
        <>
            <div className="intro-container">
                <h1>منوی رستوران</h1>
                <Menu />
            </div>
        </>
    );
}
export default Intro;