import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    getUserProfileThunkCreator,
    removeUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator
} from "../../redux/profileReducer";
import Preloader from '../Common/Preloader/Preloader';
import { LoggedInRedirect } from '../../hoc/LoggedInRedirect';
import { compose } from 'redux';

class ProfileInnerContainer extends React.Component {

    constructor(props) {
        
        super(props)
        this.props = props
    }

    componentDidMount() {
        
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
        
    }
    componentWillUnmount() {
        this.props.removeUserProfileThunkCreator()
    }
    render() {
        if (!this.props.profile) {
            return <Preloader />
        }
        return (
            <Profile  
            status={this.props.status} 
            profile={this.props.profile} 
            posts={this.props.posts}
            upDateStatus = {this.props.updateUserStatusThunkCreator}
            userId={this.props.userId}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    posts: state.profileReducer.posts,
    status: state.profileReducer.userStatus,
    userId: state.authReducer.userId
})

export default compose(
    withRouter,
    connect(mapStateToProps, {
        getUserProfileThunkCreator,
        removeUserProfileThunkCreator,
        getUserStatusThunkCreator,
        updateUserStatusThunkCreator
    }),
    LoggedInRedirect,
)(ProfileInnerContainer)