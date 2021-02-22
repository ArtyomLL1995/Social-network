import dialogsReducer from "./messagesReducer"
import profileReducer from "./profilePageReducer"


let store = {

    _state: {
        messages: {
            dialogsData: [
                { id: 1, name: 'Tema' },
                { id: 2, name: 'Tema2' },
                { id: 3, name: 'Tema3' },

            ],
            messagesData: [
                { id: 1, message: 'Hello!!' },
                { id: 2, message: 'Hello!!' },
                { id: 3, message: 'Hello!!' },
            ],
            newMessageText: '',
        },
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, how are you?', likeCount: 10 },
                { id: 2, message: "It's my first post", likeCount: 15 },
            ],
            newPostText: ''
        },

        friends: [
            {
                id: 1,
                name: 'Tema',
                src: 'https://avatars.mds.yandex.net/get-zen_doc/1899990/pub_5e57881ca4e9d52854780929_5e578a22e998506d36165d1d/scale_1200',
                alt: 'Sasha Grey'
            },

            {
                id: 2,
                name: 'Tema1',
                src: 'https://avatars.mds.yandex.net/get-zen_doc/1899990/pub_5e57881ca4e9d52854780929_5e578a22e998506d36165d1d/scale_1200',
                alt: 'Sasha Grey'
            },

            {
                id: 3,
                name: 'Tema2',
                src: 'https://avatars.mds.yandex.net/get-zen_doc/1899990/pub_5e57881ca4e9d52854780929_5e578a22e998506d36165d1d/scale_1200',
                alt: 'Sasha Grey'
            },
            {
                id: 4,
                name: 'Tema3',
                src: 'https://avatars.mds.yandex.net/get-zen_doc/1899990/pub_5e57881ca4e9d52854780929_5e578a22e998506d36165d1d/scale_1200',
                alt: 'Sasha Grey'
            },
            {
                id: 5,
                name: 'Tema4',
                src: 'https://avatars.mds.yandex.net/get-zen_doc/1899990/pub_5e57881ca4e9d52854780929_5e578a22e998506d36165d1d/scale_1200',
                alt: 'Sasha Grey'
            },
        ]
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() {
        console.log('state changed')
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messages = dialogsReducer(this._state.messages, action)

        this.rerenderEntireTree(this._state)

    }
}


export default store
window.store = store