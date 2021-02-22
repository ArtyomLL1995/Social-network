import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const FormikRadioButtons = (props) => {
    const { name, label, options, ...rest } = props
    return (
        <div >
            <label htmlFor={name}>{label}</label>
            <div></div>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        console.log('field',field)
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input
                                        type="radio"
                                        id={option.value}
                                        {...field}
                                        value={option.value}
                                        checked={field.value === option.value} />
                                        <label htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default FormikRadioButtons