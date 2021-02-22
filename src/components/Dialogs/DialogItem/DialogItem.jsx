import React from 'react'
import classes from './DialogItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    return (
        <div>
            <NavLink className={classes.dialogItem} to={'/Dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem