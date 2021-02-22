import React from 'react'
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { connect } from 'react-redux';
import {
    pageSizeAC,
    getUsersThunkCreator,
    followThunkCreator,
    unFollowThunkCreator,
    removeUsersThunkCreator,
    pageCountAC
    
} from '../../redux/usersReducer'
import { compose } from 'redux';
import { LoggedInRedirect } from '../../hoc/LoggedInRedirect'
import {
    getUsersSuper,
    usersSelectors
} from '../../redux/selectors'

class UsersInnerContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.pageSize, this.props.pageCount)
    }
    componentWillUnmount() {
        this.props.removeUsersThunkCreator() 
    }

    render() {
        if (!this.props.users.length) {
            return <Preloader />
        }
        return (
            <>
                <Users
                    users={this.props.users}
                    addPageSize={this.props.pageSizeAC}
                    pageSize={this.props.pageSize}
                    totalCount={this.props.totalCount}
                    setUsers={this.props.setUsers}
                    addUsers={this.addUsers}
                    followingProgress={this.props.followingProgress}
                    followThunkCreator={this.props.followThunkCreator}
                    unFollowThunkCreator={this.props.unFollowThunkCreator}
                    getUsers={this.props.getUsersThunkCreator}
                    removeUsers={this.props.removeUsersThunkCreator}
                    pageCount={this.props.pageCount}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuper(state),
        pageSize: usersSelectors.getPageSize(state),
        pageCount: usersSelectors.getPageCount(state),
        totalCount: usersSelectors.getTotalCount(state),
        isFetching: usersSelectors.getIsFetching(state),
        followingProgress: usersSelectors.getFollowingProgrress(state),
    }
}
export default compose(
    connect(mapStateToProps, {
        pageSizeAC,
        getUsersThunkCreator,
        removeUsersThunkCreator,
        followThunkCreator,
        unFollowThunkCreator,
        pageCountAC,
    }),
    LoggedInRedirect
)(UsersInnerContainer) 