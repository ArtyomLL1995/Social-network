import React from 'react'
import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom'



const Nav = function (props) {
  
  return (
    
    <div className={classes.nav}>
      
      <nav >
        <div className={classes.item}>
          <NavLink to='/Profile/' activeClassName={classes.active}>My Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/Dialogs' activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/Users' activeClassName={classes.active}>Users</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/Music' activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/Settings' activeClassName={classes.active}>Settings</NavLink>
        </div>
      </nav>
        
      

    </div>
  )
}
export default Nav 