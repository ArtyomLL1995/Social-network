import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logOut } from '../../redux/authReducer'


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.authReducer.isLoggedIn,
    login: state.authReducer.login,
    isFetching: state.authReducer.isFetching
})

export default connect(mapStateToProps, {logOut})(HeaderContainer) 