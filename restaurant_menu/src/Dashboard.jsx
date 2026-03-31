import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Documentation from './Documentation.jsx';

function Dashboard()
{
    return(
        <>
            <Sidebar style={{
                position: 'fixed',
                left: 0,
                top: 100,
                height: '100vh',
                width: '250px',
                backgroundColor: '#f0f0f0',
                }}
            >
                <Menu menuItemStyles={{
                    button: {
                    [`&.active`]: {
                        backgroundColor: '#13395e',
                        color: '#b6c8d9',
                    },
                    },
                    }}
                >
                    <MenuItem component={<Link to="/sendItems" />}> Send items</MenuItem>
                    <MenuItem component={<Link to="/calendar" />}> Calendar</MenuItem>
                    <MenuItem component={<Link to="/e-commerce" />}> E-commerce</MenuItem>
                </Menu>
            </Sidebar>;
        </>
    );
}
export default Dashboard;