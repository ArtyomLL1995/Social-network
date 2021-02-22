import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import classes from './Login.module.css'

const Input = (props) => {
    return <div className={classes.formControl}>
        <label htmlFor={props.name}>{props.label}</label>
        <div>
            <Field className={props.className} id={props.name} name={props.name} type={props.type}/>
            <ErrorMessage name={props.name} component={TextError} />
        </div>
    </div>
}

const FormikInput = (props) => {
    
    const { label, name, email, password, touchedEmail, touchedPassword, type } = props

    return (
        <>
            {touchedEmail && !email  || touchedPassword && !password  ?
                <Input className={classes.alert} name={name} label={label} type={type}/> :
                <Input className={null} name={name} label={label} type={type}/>}
        </>
    )
}

export default FormikInput