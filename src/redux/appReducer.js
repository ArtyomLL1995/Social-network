import { logInUserThunkCreator } from "./authReducer"

const INITIALIZED_SUCCSESS = 'INITIALIZED_SUCCSESS'

let initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCSESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializeSuccsess = () => ({type: INITIALIZED_SUCCSESS})

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(logInUserThunkCreator())
   Promise.all([promise]).then(() => {
    dispatch(initializeSuccsess())
   })
}