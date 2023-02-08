const link = "https://sheetdb.io/api/v1/xf3tzwqsek2y8"

export const fetchClients = (request) => (dispatch) => {
    dispatch(clientsFetching());
    request(link)
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