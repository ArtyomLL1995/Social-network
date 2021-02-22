import React from 'react'
import classes from './User.module.css'
import defaultAvatar from '../../../assets/defaultAvatar.png'
import { NavLink } from 'react-router-dom'


const User = (props) => {

    const {
        id,
        photo,
        followed,
        followingProgress,
        unFollowThunkCreator,
        followThunkCreator,
        name,
        status
    } = props

    return (
        <div className={classes.user}>
            <div className={classes.logoBlock}>
                <div>
                    <NavLink to={'/Users/' + id} >
                        <img src={photo == null ? defaultAvatar : photo} alt="UserPhoto" />
                    </NavLink>
                </div>
                <div>
                    {followed
                        ? <button disabled={followingProgress.some(userId => userId === id)} onClick={() => {
                            unFollowThunkCreator(id)

                        }}>Unfollow</button>
                        : <button disabled={followingProgress.some(userId => userId === id)} onClick={() => {
                            followThunkCreator(id)
                        }}>Follow</button>}

                </div>
            </div>
            <div className={classes.infoBlock}>
                <div className={classes.name}>{name}</div>
                <div className={classes.status}>{status}</div>
                <div className={classes.country}>Belarus<i>(hardcode)</i>,</div>
                <div className={classes.city}>Bralaw<i>(hardcode)</i></div>
            </div>
        </div>
    )
}
export default User