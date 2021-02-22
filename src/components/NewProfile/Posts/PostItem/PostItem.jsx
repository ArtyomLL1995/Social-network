import React from 'react'
import classes from './PostItem.module.css'
import defaultAvatar from '../../../../assets/defaultAvatar.png'

const PostItem = (props) => {
    return (
        <>
         <div className={classes.postsContainer}>
            <div className={classes.avatar}>
                <img src={defaultAvatar} alt="UserAvatar" />
            </div>
            <div className={classes.userName}>
                {props.userName}
            </div>
            <div className={classes.postText}>
                {props.postText}
            </div>
            <div className={classes.likesCount}>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
        
        </>
       
    )
}

export default PostItem