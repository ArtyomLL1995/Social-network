import React from 'react'
import FormikCheckbox from './FormikCheckbox'
import FormikDatePicker from './FormikDatePicker'
import FormikInput from './FormikInput'
import FormikRadioButtons from './FormikRadioButtons'
import FormikSelect from './FormikSelect'
import FormikTextArea from './FormikTextArea'

const FormikControl = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'input': return <FormikInput {...rest} />
        case 'textarea': return <FormikTextArea {...rest} />
        case 'select': return <FormikSelect {...rest} />
        case 'radio': return <FormikRadioButtons {...rest} />
        case 'checkbox': return <FormikCheckbox {...rest} /> 
        case 'date': return <FormikDatePicker {...rest} />
        default: return null
    }
}

export default FormikControl