import { useSelector } from "react-redux";
import { useTable } from "react-table";
import { useMemo } from "react";


export default function Table() {
    const {meta, passes} = useSelector((state) => state.clients.clientList);

  const columns = useMemo(
    () => [
      {Header: 'ФИО', accessor: 'fio'},
      {Header: 'ID Карты', accessor: 'user_id'},
      {Header: 'Макет карты', accessor: 'template'},
      {Header: 'День рождения', accessor: 'birthday'},
      {Header: 'Бонусы', accessor: 'bonus'}, 
      {Header: 'Скидка', accessor: 'discount'},
      {Header: 'Уровень лояльности', accessor: 'loyalty_level'},
      {Header: 'Сумма покупок за период', accessor: 'summ'},
      {Header: 'Общая сумма покупок', accessor: 'summ_all'},
      {Header: 'Последнее посещение', accessor: 'date_last'},
      {Header: 'Количество визитов за период',accessor: 'visits'},
      {Header: 'Общее количество визитов',accessor: 'visits_all'},
    ],
    []
  );
 
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: passes,
    });


  return (
    <table {...getTableProps()} className="table table-striped">
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
