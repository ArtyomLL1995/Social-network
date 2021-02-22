import React from 'react'
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
import { LoggedInTogglegAC, LoggedInFetchingAC, logOut } from '../redux/authReducer'

export const LoggedInRedirect = (Component) => {
    class RedirectedComponent extends React.Component {

        constructor(props) {
            super(props)
            this.props = props
        }

        render() {
            return (
                <>
                 {!this.props.isLoggedIn && this.props.confirmation ? <Redirect to='/Login' /> : <></>}
                 {this.props.isFetching && !this.props.isLoggedIn ? <></> : <Component {...this.props} />}
                </>
            )
        }
    }

    let mapStateToPropsLoggedInRedirect = (state) => ({
        isLoggedIn: state.authReducer.isLoggedIn,
        isFetching: state.authReducer.isFetching,
        confirmation: state.authReducer.confirmation,
    })
    let LogInRedirectComponent = connect(mapStateToPropsLoggedInRedirect, {LoggedInTogglegAC, LoggedInFetchingAC, logOut})(RedirectedComponent)
    return LogInRedirectComponent
}

