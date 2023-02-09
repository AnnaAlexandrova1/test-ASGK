import axios from 'axios'
import { userLogin, userGetToken } from '../reducers/authReduser'

// ключ авторизации
export const loginUser = (login, password) => {
   
    const headers = {
    'Content-Type': 'application/json',
    }
    const data = JSON.stringify({
        login: login,
        password: password
    })

    return async dispatch => {
        try {
            const response = await axios.post(`https://api.asgk-group.ru/test-auth-only`, data, {
               headers: headers
            })
            dispatch(userLogin(login))
            localStorage.setItem('auth_key', response.data.auth_token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

// токен для запросов
export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://api.asgk-group.ru/v1/authorization`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `${localStorage.getItem('auth_key')}`,

                    }
                }
            )
            console.log(localStorage.getItem('auth_key'))
            dispatch(userGetToken())
            localStorage.setItem('auth_token', response.data.tokens[0].token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('auth_token')
        }
    }
}
