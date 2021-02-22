const POST_NEW_TEXT = 'POST_NEW_TEXT'

let initialState = {
    dialogsData: [],
    messagesData: [],
}

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_NEW_TEXT:
            let newDialog = {
                id: 4,
                name: 'Tema'
            }
            let newPostItem = {
                id: 4,
                message: action.postText,
            }
            return {
                ...state,
                dialogsData: [...state.dialogsData, newDialog],
                messagesData: [...state.messagesData, newPostItem],
            }
        default:
            return state
    }
}



export const postNewTextActionCreator = (postText) => {
    return {
        type: POST_NEW_TEXT,
        postText: postText
    }
}
