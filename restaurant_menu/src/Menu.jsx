import './Menu.css'

function Menu({items})
{
    return(
        <>
            <div className="menu-grid">
                {items.map((item, index) => (
                    <div key={index} className="menu-card">
                    <h3 className="menu-title">{item.title}</h3>
                    <p className="menu-description">{item.description}</p>
                    <div className="menu-price">
                        {item.price.toLocaleString('fa-IR')} تومان
                    </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default Menu;