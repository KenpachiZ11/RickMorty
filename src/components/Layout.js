import { NavLink, Outlet } from 'react-router-dom'

const setActive = ({active}) => active ? 'active-link' : ''


const Layout = () => {
    return (
        <>
        <header>
            <NavLink to='/' className={setActive}>Home</NavLink>
            <NavLink to='/hero' className={setActive}>Hero</NavLink>
            <NavLink to='/contact' className={setActive}>Contact</NavLink>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
            2022
        </footer>
        </>
    )
}

export {Layout}