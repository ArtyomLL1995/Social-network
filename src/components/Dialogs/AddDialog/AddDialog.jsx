import React from 'react'
import classes from './AddDialog.module.css'
import DialogItem from '../DialogItem/DialogItem'
import MessageItem from '../MessageItem/MessageItem'
import { Formik, Form, Field } from 'formik'


const AddDialog = (props) => {

    const initialValues = {
        textMessage: ''
    }

    const onSubmit = (values, onSubmitProps) => {
        if (values.textMessage === '') return null
        else {
            postNewText(values.textMessage)
            onSubmitProps.resetForm()
        }
    }

    const postNewText = (postText) => {
        props.postNewText(postText)
    }

    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
    let messageItems = props.state.messagesData.map(message => <MessageItem message={message.message} key={message.id} />)

    return (
        <div className={classes.dialogsContainer}>
            <div className={classes.dialogs}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageItems}
            </div>
            <div className={classes.addDialog}>
                <hr/>
                <p></p>
                <div>
                    <Formik initialValues={initialValues} onSubmit={onSubmit}>
                        <Form>
                            <h2>
                                <label htmlFor="textMessage">Send Message</label>
                            </h2>
                            <div></div>
                            <Field as='textarea' name='textMessage' id='textMessage' />
                            <div></div>
                            <button type='submit'>Send</button>
                        </Form>
                    </Formik>
                </div>
            </div>


        </div>
    )
}
export default AddDialog