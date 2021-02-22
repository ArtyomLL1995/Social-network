import React from 'react'
import classes from './Friend.module.css'
import defaultAvatar from '../../../../assets/defaultAvatar.png'
import { NavLink } from 'react-router-dom'


const Friend = (props) => {
    
    return (
        <div className={classes.friend}>
            <NavLink to={'/Users/' + props.id}>
                <div>
                    {props.avatar == null
                        ? <img src={defaultAvatar} alt="friendAvatar" />
                        : <img src={props.avatar} alt="friendAvatar" />}
                </div>
            </NavLink>
            <div>{props.name}</div>
        </div>
    )
}
export default Friend