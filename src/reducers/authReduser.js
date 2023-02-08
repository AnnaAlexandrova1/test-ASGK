const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

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
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}


export const userLogin = login => ({type: LOGIN, payload: login})
export const logout = () => ({type: LOGOUT})