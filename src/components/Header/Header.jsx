import React from 'react'
import classes from './Header.module.css'
import logo from '../../assets/networkLogo.png'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
    const logout = () => {
        props.logOut()
    }
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img alt='TestNetworkLogo' src={logo} />
            </div>
            <div className={classes.login}>

                {props.isLoggedIn ?
                    <div>
                        <div><span>{props.login}</span></div>
                        <div><button onClick={logout}>Log out</button></div>
                    </div>
                    : <NavLink to='/Login'> <button>Login</button></NavLink>}

            </div>
        </header>
    )
}
export default Header 