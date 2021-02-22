import { follow, unFollow, getUsers } from '../API/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const PAGE_SIZE = 'PAGE_SIZE'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'
const PAGE_COUNT = 'PAGE_COUNT'
const TOTAL_COUNT = 'TOTAL_COUNT'

let initialState = {
    users: [],
    pageSize: 100,
    pageCount: 1,
    totalCount: null,
    isFetching: false,
    followingProgress: [],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case PAGE_SIZE:
            return {
                ...state,
                pageSize: action.pageSize
            }
        case PAGE_COUNT:
            return {
                ...state,
                pageCount: action.pageCount
            }
        case TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.followingProgress ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export const pageSizeAC = (pageSize) => ({ type: PAGE_SIZE, pageSize })

export const pageCountAC = (pageCount) => ({ type: PAGE_COUNT, pageCount })

export const totalCountAR = (totalCount) => ({ type: TOTAL_COUNT, totalCount })

export const togglePreloaderAC = (isFetching) => ({ type: TOGGLE_PRELOADER, isFetching })

export const toggleFollowingProgressAC = (followingProgress, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, followingProgress, userId })

export const getUsersThunkCreator = (pageSize, pageCount) =>
    async (dispatch) => {
        dispatch(pageCountAC(pageCount))
        const res = await getUsers(pageSize, pageCount)
        dispatch(setUsersAC(res.items))
        dispatch(totalCountAR(res.totalCount))
    }


export const removeUsersThunkCreator = () => {
    return (dispatch) => {
        dispatch(setUsersAC([]))
    }
}

export const followThunkCreator = (userId) =>

    async (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId))
        const res = await follow(userId)
        if (res.data.resultCode === 0) {
            dispatch(followAC(userId))
        }
        dispatch(toggleFollowingProgressAC(false, userId))
    }


export const unFollowThunkCreator = (userId) =>
    async (dispatch) => {
        dispatch(toggleFollowingProgressAC(true, userId))
        const res = await unFollow(userId)
        if (res.data.resultCode === 0) {
            dispatch(unfollowAC(userId))
        }
        dispatch(toggleFollowingProgressAC(false, userId))
    }






