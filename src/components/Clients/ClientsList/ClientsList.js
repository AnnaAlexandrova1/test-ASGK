import { useSelector } from "react-redux";

import ClientsControl from "./ClientsControl";
import Table from "./Table";

export default function ClientsList() {
  const clientList = useSelector((state) => state.clients.clientList);

  if (clientList.length < 1) {
    return "список пуст";
  }

  return (
    <>
      <ClientsControl />
      <Table />
    </>
  );
}
