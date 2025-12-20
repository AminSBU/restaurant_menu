import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

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
                }}>
                <Menu>
                    <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem> Documentation </MenuItem>
                    <MenuItem> Calendar </MenuItem>
                </Menu>
            </Sidebar>;
        </>
    );
}
export default Dashboard;