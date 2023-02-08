import axios from 'axios'
import { userLogin } from '../reducers/authReduser'

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
            localStorage.setItem('auth_token', response.data.auth_token)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}


export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(userLogin(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}
