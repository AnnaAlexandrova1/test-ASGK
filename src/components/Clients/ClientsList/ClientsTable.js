import { useSelector } from "react-redux";
import { useTable } from "react-table";
import { useMemo } from "react";

export default function ClientsTable() {
    const clientList = useSelector((state) => state.clients.clientList);
    
    // отрисуем все столбцы для таблицы
    const drowColumns = () => {
        const example = clientList[0];
        const headers = []
        for (let key in example) {
            headers.push({
                Header: key,
                accessor: key
            })
        }
        return headers
    }

  const columns = useMemo(
    () => drowColumns(),
    []
  );
 
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: clientList,
    });


  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
            prepareRow(row);
          return (
              <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
