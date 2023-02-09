const link = "https://api.asgk-group.ru"
const auth_token = localStorage.getItem("auth_token");

export const fetchClients = (request) => (dispatch) => {
    dispatch(clientsFetching());
    request(`${link}/v1/authorization`)
    .then(data => dispatch(clientsFetched(data)))
    .catch(() => dispatch(clientsFetchingError()))
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