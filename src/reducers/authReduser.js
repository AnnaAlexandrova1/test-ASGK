const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const GET_TOKEN = 'GET_TOKEN'

const initialState = {
    isAuth: false,
    currentUser: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                currentUser: action.payload,
            }
        case GET_TOKEN: 
            return {
                ...state,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('auth_token')
            localStorage.removeItem('auth_key')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}


export const userLogin = login => ({ type: LOGIN, payload: login })
export const userGetToken =() => ({type: GET_TOKEN})
export const logout = () => ({type: LOGOUT})