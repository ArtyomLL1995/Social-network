import { loginMe, logInProfile, getCaptcha, logOutMe } from '../API/api'

const SET_USER_DATA = 'SET_USER_DATA'
const LOGGED_IN_TOGGLE = 'LOGGED_IN_TOGGLE'
const LOGGED_IN_FETCHING = 'LOGGED_IN_FETCHING'
const CAPTCHA = 'CAPTCHA'



let initialState = {
    userId: null,
    email: null,
    login: null,
    isLoggedIn: false,
    isFetching: false,
    confirmation: false,
    captchaImg: '',
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,//Деструктуризация
            }
        case LOGGED_IN_TOGGLE:
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            }
        case LOGGED_IN_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
                confirmation: action.confirmation
            }
        case CAPTCHA:
            return {
                ...state,
                captchaImg: action.captchaImg
            }
        default:
            return state
    }
}


export const setUserDataAC = (userId, email, login, isLoggedIn) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login, isLoggedIn: isLoggedIn },
    }
}

export const LoggedInTogglegAC = (isLoggedIn) => {
    return {
        type: LOGGED_IN_TOGGLE,
        isLoggedIn: isLoggedIn
    }
}

export const LoggedInFetchingAC = (isFetching, confirmation) => {
    return {
        type: LOGGED_IN_FETCHING,
        isFetching: isFetching,
        confirmation: confirmation
    }
}

export const captcha = (captchaImg) => ({
    type: CAPTCHA,
    captchaImg: captchaImg
})

export const logInUserThunkCreator = () => async (dispatch) => {
    dispatch(LoggedInFetchingAC(true, false))
    const res = await logInProfile()
    if (res.data.resultCode === 0) {
        let { id, email, login } = res.data.data
        dispatch(setUserDataAC(id, email, login, true))
    }
    dispatch(LoggedInFetchingAC(false, true))
}

export const login = (email, password, rememberMe) =>
    async (dispatch) => {
        const res = await loginMe(email, password, rememberMe)
        if (res.data.resultCode === 0) {
            dispatch(logInUserThunkCreator())
        }
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaThunk())
        }
    }


export const logOut = () =>
    async (dispatch) => {
        const res = await logOutMe()
        if (res.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    }


export const getCaptchaThunk = () =>
    async (dispatch) => {
        const res = await getCaptcha()
        dispatch(captcha(res.data.url))
        console.log(res)
    }


