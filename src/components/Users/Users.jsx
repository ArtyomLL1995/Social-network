import React from 'react'
import Paginator from './Paginator/Paginator'
import User from './User/User'
import classes from './Users.module.css'

const Users = (props) => {
    let users = props.users.map(user => <User
        key={user.id}
        id={user.id}
        name={user.name}
        status={user.status}
        photo={user.photos.small}
        followed={user.followed}
        followingProgress={props.followingProgress}
        followThunkCreator={props.followThunkCreator}
        unFollowThunkCreator={props.unFollowThunkCreator}
    />)

    return (
        <div className={classes.users}>
            <div>
                {users}
            </div>
            <Paginator
                pageSize={props.pageSize}
                totalCount={props.totalCount}
                getUsers={props.getUsers}
                pageCount={props.pageCount}
                removeUsers={props.removeUsers}
                />
                
        </div>
    )
}

export default Users