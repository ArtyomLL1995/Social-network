import React from 'react'
import AddNewPostContainer from './AddNewPost/AddNewPostContainer'

const Posts = (props) => {
    return (
        <AddNewPostContainer posts={props.posts}/>
    )
}

export default Posts