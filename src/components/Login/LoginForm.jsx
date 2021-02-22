import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../Common/FormControls/FormikControl'
import { login } from '../../redux/authReducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


const LoginForm = (props) => {

    const {login, isLoggedIn, captchaImg} = props

    const radioOptions = [
        { key: 'Remember me', value: 'rememerMe' }
    ]

    const initialValues = {
        email: '',
        password: '',
        rememberMe: radioOptions,
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    })

    const onSubmit = values => {
        login( values.email, values.password, false)
    }

    if (isLoggedIn) { return <Redirect to={'/Profile'} /> } // Проверяем, если мы залогинены, то редиректим на профиль

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <h1>Login</h1>
                        <FormikControl
                            email={formik.values.email}
                            touchedEmail={formik.touched.email}
                            control='input'
                            type='email'
                            label='Email'
                            name='email' />
                        <FormikControl
                            password={formik.values.password}
                            touchedPassword={formik.touched.password}
                            control='input'
                            type='password'
                            label='Password'
                            name='password' />
                        <FormikControl
                            control='checkbox'
                            label='Remember me'
                            name='rememberMe'
                            options={radioOptions} />
                        <p></p>
                        <button type='submit' disabled={!formik.isValid}>Login</button>
                        {!captchaImg ?
                            null
                            : <div>
                                <p></p>
                                <img src={captchaImg} alt="captcha" />
                            </div>
                        }
                    </Form>
                }
            }
        </Formik>
    )
}
export let mapStateToProps = (state) => {
    return {
        isLoggedIn: state.authReducer.isLoggedIn,
        captchaImg: state.authReducer.captchaImg
    }
}

export default connect(mapStateToProps, { login })(LoginForm)