import React from 'react'
import PostItem from '../PostItem/PostItem'
import { Formik, Form, Field } from 'formik'

const AddNewPost = (props) => {
    
    let posts = props.posts.map(post => <PostItem
        id={post.id}
        postText={post.postText}
        userAva={post.userAva}
        userName={post.userName}
        likesCount={post.likesCount}
        key={post.id}
    />)

    const initialValues = {
        postMessage: ''
    }

    const onSubmit = (values, onSubmitProps) => {
        if (values.postMessage === '') return null
        else {
            props.addNewPostThunkCreator(values.postMessage, props.login)
            onSubmitProps.resetForm()
        }
    }

    return (
        <div>
            <div>
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {
                        formik => {
                            return <Form>
                                <h3>
                                    <label htmlFor="postMessage">Add post</label>
                                </h3>
                                <div></div>
                                <Field as='textarea' name='postMessage' id='postMessage' value={formik.values.postMessage} />
                                <div></div>
                                <button type='submit'>Send</button>
                            </Form>
                        }
                    }
                </Formik>
            </div>
            <h3>My Posts</h3>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default AddNewPost