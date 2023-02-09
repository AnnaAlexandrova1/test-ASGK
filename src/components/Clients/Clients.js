import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchClients } from "../../actions/clients"
import ClientsList from "./ClientsList/ClientsList"
import { useHttp } from '../../hooks/http.hook'
import { auth } from "../../actions/user"


export default function Clients() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.clients.loadingStatus)
    const { request } = useHttp()
    const isAuth = useSelector(state => state.auth.isAuth)

    useEffect(() => {
        dispatch(fetchClients(request))
    }, [])

    const drowStatus = () => {
        switch (status) {
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