import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import classes from './Login.module.css'

const FormikSelect = (props) => {
    const { label, name, options, ...rest } = props
    return (
        <div className={classes.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field as='select' id={name} name={name} {...rest}>
                {
                    options.map(option => {
                        return <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default FormikSelect