const link = "https://api.asgk-group.ru"
const auth_token = localStorage.getItem("auth_token");

export const fetchClients = (request, params) => (dispatch) => {
    dispatch(clientsFetching());
    request(`${link}/v1/${localStorage.getItem('auth_token')}/passes?${params}`)
    .then(data => dispatch(clientsFetched(data)))
    .catch(() => dispatch(clientsFetchingError()))
}

export const fetchMoreClients = (request, params) => (dispatch) => {
    console.log(params)
    dispatch(clientsMoreFetching());
    request(`${link}/v1/${localStorage.getItem('auth_token')}/passes?${params}`)
        .then(data => { console.log(data)
            dispatch(clientsMoreFetched(data))
        })
    .catch(() => dispatch(clientsMoreFetchingError()))
}

export const clientsFetching = () => {
    return {
        type: 'GET_CLIENTS'
    }
}

export const clientsFetched = (list) => {
    return {
        type: 'GET_CLIENTS_FINISH',
        payload: list
    }
}

export const clientsFetchingError = () => {
    return {
        type: 'GET_CLIENTS_ERROR'
    }
}

export const clientsMoreFetching = () => {
    return {
        type: 'GET_MORE_CLIENTS'
    }
}

export const clientsMoreFetched = (list) => {
    return {
        type: 'GET_MORE_CLIENTS_FINISH',
        payload: list
    }
}

export const clientsMoreFetchingError = () => {
    return {
        type: 'GET_MORE_CLIENTS_ERROR'
    }
}