import { NavLink, Outlet } from 'react-router-dom'
import style from './RootPage.module.css';

const RootPage = (props) => {
    return <>
        <ol className={style.navLinkStyle}>
            <li>
                <NavLink to='/' className={({ isActive }) => {
                    return isActive ? style.activate : undefined;
                }}
                    end
                >Home</NavLink>            
            </li>
            <li>
                <NavLink to='/products' className={({ isActive }) => {
                    return isActive ? style.activate : undefined;
                }}>Products</NavLink>
            </li>

            <li>
                <NavLink to='/samplePage' className={({ isActive }) => {
                    return isActive ? style.activate : undefined;
                }}>SamplePage</NavLink>
            </li>
        </ol>
        <Outlet></Outlet>
    </>
}

export default RootPage;

