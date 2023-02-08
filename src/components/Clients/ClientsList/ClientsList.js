import { useSelector } from "react-redux"



export default function ClientsList() {
    const clientList = useSelector(state => state.clients.clientList)

    if (clientList.length < 1) {
        return 'список пуст'
    }

    console.log(clientList)
    return (
        <div></div>
    )

}