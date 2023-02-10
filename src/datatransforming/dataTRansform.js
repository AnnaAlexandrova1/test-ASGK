    
    // переметры запроса (отсутп, лимит (установила 50), поиск(если он есть))
    export const urlParams = (offset, limit) => {
        let params = new URLSearchParams();
        params.append('offset', offset)
        params.append('limit', limit)
        return `${params}`
    }