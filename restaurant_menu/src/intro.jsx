import './intro.css'

function Intro()
{
    return(
        <>
            <div className="intro-container">
                <button className="restaurant-menu">منوی رستوران</button>
                <button className="Cafe-menu">منوی کافه</button>
                <button className="breakfast-menu">منوی صبحانه</button>
                <button className="hooka-menu">منوی هوکا</button>
            </div>
        </>
    );
}
export default Intro;