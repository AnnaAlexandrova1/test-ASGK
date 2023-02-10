
const GET_CLIENTS = "GET_CLIENTS"
const GET_CLIENTS_FINISH = "GET_CLIENTS_FINISH"
const GET_CLIENTS_ERROR = "GET_CLIENTS_ERROR"
const GET_MORE_CLIENTS = "GET_MORE_CLIENTS"
const GET_MORE_CLIENTS_FINISH = "GET_MORE_CLIENTS_FINISH"
const GET_MORE_CLIENTS_ERROR = "GET_MORE_CLIENTS_ERROR"
const SHOW_MORE = 'SHOW_MORE'
const SEARCH = 'SEARCH'
const SEARCH_DELETE = 'SEARCH_DELETE'


const initialState = {
    clientList: [],
    loadingStatus: 'idle',
    loadintMoreStatus: 'idle',
    search: {},
        // { fio: '', user_id: '', template: '', created_at: '', bonus: '', discount: '', loyalty_level: '', summ: '', summ_all: '', date_last: '', visits: '', visits_all: '' },
    limit: 5,
    offset: 0,
    ended: false
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
                clientList: action.payload.passes,
                loadingStatus: 'idle'
            }
        case GET_CLIENTS_ERROR: {
            return {
                ...state,
                clientList: {},
                loadingStatus: 'error'
            }   
        }
        case GET_MORE_CLIENTS:
            return {
                ...state,
                loadintMoreStatus: 'loading'
            }
        case GET_MORE_CLIENTS_FINISH:
            return {
                ...state,
                clientList: [...state.clientList, ...action.payload.passes],
                ended: () => {return action.payload.passes < state.limit ? true : false},
                loadintMoreStatus: 'idle'
            }
        case GET_MORE_CLIENTS_ERROR: {
            return {
                ...state,
                loadintMoreStatus: 'error'
            }   
        }
        case SHOW_MORE:
            return {
                ...state,
                offset: state.offset + state.limit,
            }
        case SEARCH: 
            return {
                ...state,
                offset: 0,
                search: {
                    ...state.search,
                    [action.payload.param]: action.payload.value
                }
            }
        case SEARCH_DELETE: 
            return {
                ...state, 
                search: initialState.search,
                offset: 0,
                ended: false
            }
        default:
            return state
    }
}

export const showMore = () => ({ type: SHOW_MORE })
export const setSearch = (data) => ({ type: SEARCH, payload: data })
export const searchDelete = () => ({type:SEARCH_DELETE})


