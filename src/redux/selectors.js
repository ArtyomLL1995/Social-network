import { createSelector } from 'reselect'

export const usersSelectors = {
    getAllUsers(state) {
        return state.usersReducer.users
    },
    getPageSize(state) {
        return state.usersReducer.pageSize 
    },
    getPageCount(state) {
        return state.usersReducer.pageCount
    },
    getTotalCount(state) {
        return state.usersReducer.totalCount
    },
    getIsFetching(state) {
        return state.usersReducer.isFetching 
    },
    getFollowingProgrress(state) {
        return state.usersReducer.followingProgress
    },
    getAllUsersSelector(state) {
        return this.getAllUsers(state).filter(user => true) 
    },
}

export const getUsersSuper = createSelector(usersSelectors.getAllUsers, (users) => {
    return users.filter(user => true)
})

export const postsSelectors = {
    getPosts(state) {
        return state.profileReducer.posts
    },
    getProfile(state) {
        return state.profileReducer.profile
    },
    getNewPostsText(state) {
        return state.profileReducer.newPostText
    },
    getLogin(state) {
        return state.authReducer.login
    }
}

