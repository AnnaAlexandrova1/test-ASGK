import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClients, fetchMoreClients } from "../../actions/clients";
import ClientsList from "./ClientsList/ClientsList";
import { useHttp } from "../../hooks/http.hook";
import { urlParams } from "../../datatransforming/dataTRansform";

export default function Clients() {
  const dispatch = useDispatch();
  const { clientList, loadingStatus, search, limit, offset } = useSelector(
    (state) => state.clients
  );
  const { request } = useHttp();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    dispatch(fetchClients(request, urlParams(offset, limit, search)));
  }, []);

  useEffect(() => {
    dispatch(fetchClients(request, urlParams(offset, limit, search)));
  }, [search]);

  useEffect(() => {
    if (offset !== 0) {
      dispatch(fetchMoreClients(request, urlParams(offset, limit, search)));
    }
  }, [offset]);

  const drowStatus = () => {
    switch (loadingStatus) {
      case "idle":
        return <ClientsList />;
      case "loading":
        return "Загрузка...";
      default:
        return "Ошибка";
    }
  };

  return (
    <>
      <div className="container">{drowStatus()}</div>
    </>
  );
}
