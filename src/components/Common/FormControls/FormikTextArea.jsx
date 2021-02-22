import React from 'react' 
import { Field, ErrorMessage} from 'formik'
import TextError from './TextError'
import classes from './Login.module.css'

const FormikTextArea = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className={classes.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default FormikTextArea