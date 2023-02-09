import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchClients } from "../../actions/clients"
import ClientsList from "./ClientsList/ClientsList"
import { useHttp } from '../../hooks/http.hook'
import { auth } from "../../actions/user"


export default function Clients() {
    const dispatch = useDispatch()
    const { clientList, loadingStatus, search, limit, offset } = useSelector(state => state.clients)
    const { request } = useHttp()
    const isAuth = useSelector(state => state.auth.isAuth)
    
    // переметры запроса (отсутп, лимит (установила 50), поиск(если он есть))
    const urlParams = () => {
        let params = new URLSearchParams();
        params.append('offset', offset)
        params.append('limit', limit)


        // if (search.length > 0) {
        //       params = params + ``
        //   }
        return `${params}`
    }

    useEffect(() => {
        dispatch(fetchClients(request, urlParams()))
    }, [])

    const drowStatus = () => {
        switch (loadingStatus) {
            case 'idle':
                return <ClientsList />;
            case 'loading':
                return 'Загрузка...'
            default:
                return 'Ошибка'
        }
    }

    return (
        <div className="container">{drowStatus()}</div>
    )
}