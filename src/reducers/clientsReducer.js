const GET_CLIENTS = "GET_CLIENTS"
const GET_CLIENTS_FINISH = "GET_CLIENTS_FINISH"
const GET_CLIENTS_ERROR = "GET_CLIENTS_ERROR"

const initialState = {
    clientList: [],
    loadingStatus: 'idle',
    search: '',
    limit: 5,
    offset: 0
}

export default function clientsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CLIENTS:
            return {
                ...state,
                loadingStatus: 'loading'
            }
        case GET_CLIENTS_FINISH:
            return {
                ...state,
                clientList: action.payload,
                loadingStatus: 'idle'
            }
        case GET_CLIENTS_ERROR: {
            return {
                ...state,
                clientList: [],
                loadingStatus: 'error'
            }   
        }
        default:
            return state
    }
}


