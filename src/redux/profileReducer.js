import { getUserProfile, getUserStatus, sendUserStatus } from '../API/api'

const SET_USER_PROFILE = 'SET_USER_PROFILE';
const APDATE_USER_STATUS = 'APDATE_USER_STATUS'
const ADD_NEW_POST = 'ADD_NEW_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [],
    newPostText: '',
    profile: null,
    userStatus: null,
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case APDATE_USER_STATUS: {
            return {
                ...state,
                userStatus: action.userStatus
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state,
                newPostText: action.postText
            }
        }
        case ADD_NEW_POST: {
            let newPost = {
                id: 1,
                postText: action.postText,
                userAva: null,
                userName: action.login,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post.id != action.postId)
            }
        }
        default:
            return state;
    }
}



export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const updateUserStatusAC = (userStatus) => ({ type: APDATE_USER_STATUS, userStatus: userStatus })

export const addNewPostAC = (postText, login) => ({ type: ADD_NEW_POST, postText, login })

export const deletePostAC = (postId) => ({ type: DELETE_POST, postId })

export const updatePostText = (postText) => ({ type: UPDATE_POST_TEXT, postText: postText })


export const getUserProfileThunkCreator = (UserId) =>
    async (dispatch) => {
        const res = await getUserProfile(UserId)
        dispatch(setUserProfile(res.data))
    }
// Делаем запрос на сервер, и диспатчим данные в стор

export const removeUserProfileThunkCreator = () => {
    return (dispatch) => {
        dispatch(setUserProfile(null))
    }
} // Удаляем из стора загруженный профиль

export const getUserStatusThunkCreator = (UserId) =>
    async (dispatch) => {
        const res = await getUserStatus(UserId)
        dispatch(updateUserStatusAC(res.data))
    }
// Делаем запрос и диспатчим статус пользователя

export const updateUserStatusThunkCreator = (status) => 
    async (dispatch) => {
       const res = await sendUserStatus(status)
            if (res.data.resultCode === 0) {
                dispatch(updateUserStatusAC(status))
            }
    }


export const addNewPostThunkCreator = (postText, login) => (dispatch) => {
    dispatch(addNewPostAC(postText, login))
}

export default profileReducer;