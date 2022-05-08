import { NavLink, Outlet } from 'react-router-dom'
import styles from '../Layout/Layout.module.css'
import { PageHeader } from 'antd'

const setActive = ({isActive}) => isActive ? styles.active_link : ''

const Layout = () => {
    return (
        <>
        <PageHeader
            title='Rick&Morty'
            className={styles.header}
        >

            <header className={styles.header_mini}>
                <div className={styles.header_link}>
                    <NavLink to='/' className={setActive}>Home</NavLink>
                    <NavLink to='/hero' className={setActive}>Hero</NavLink>
                    <NavLink to='/contact' className={setActive}>Contact</NavLink>
                </div>
            </header>
        </PageHeader>
            <main className={styles.main}>
                <Outlet/>
            </main>

            <footer className={styles.footer}>
                2022
            </footer>
        </>
    )
}

export {Layout}
