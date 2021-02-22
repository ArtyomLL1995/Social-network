import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-Key': '0956be17-9287-4aaa-8ddc-9d18425e88b9',
    }
})

export const getUsers = (pageSize, pageCount) => {
    return instance.get('users?page=' + pageCount + '&count=' + pageSize, {}).then(res => res.data)
} // Получаем с сервера объект с пользователями (50 пользователей за раз)

export const getUserProfile = (userId) => {
    return instance.get('profile/' + userId, {})
} // Получаем с сервера профиль пользователя согласно id выбранного пользователя

export const getUserStatus = (userId) => {
    return instance.get('profile/status/' + userId, {})
} // Получаем с сервера статус профиля пользователя

export const sendUserStatus = (status) => {
    return instance.put('profile/status/', { status: status })
} // Отправляем на сервер новый статус пользователя

export const follow = (userId) => {
    return instance.post('follow/' + userId, {}, {})
} // Отправляем запрос на подписку на пользователя

export const unFollow = (userId) => {
    return instance.delete('follow/' + userId, {}, {})
} // Отправляем запрос на отписку от пользвателя

export const logInProfile = () => {
    return instance.get('auth/me')
} // Отпраялем запрос на проверку верификации профиля

export const loginMe = (email, password, rememberMe = false) => {
    return instance.post('auth/login', { email, password, rememberMe })
} // Ллогинимся в приложение

export const logOutMe = () => {
    return instance.delete('auth/login')
} // Выходим из приложения

export const getCaptcha = () => {
    return instance.get('security/get-captcha-url')
} // Отправляем запрос на капчу