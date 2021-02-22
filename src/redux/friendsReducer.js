let initialState = {
    friends: [
    ]
}

export const friendsReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    return stateCopy
}
export default friendsReducer