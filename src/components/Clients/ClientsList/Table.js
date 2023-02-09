import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { useMemo } from "react";


export default function Table() {
  const { meta, passes } = useSelector((state) => state.clients.clientList);
  
  const showArrow = (col) => {
    if (col) {
         return <i className="bi bi-arrow-down-short"></i>
    }
    if (col===false) {
      return <i className="bi bi-arrow-up-short"></i>
    } if( col === undefined) {
      return ''
    }
  }

  const columns = useMemo(
    () => [
      {Header: 'ФИО', accessor: 'fio'},
      {Header: 'ID Карты', accessor: 'user_id'},
      {Header: 'Макет карты', accessor: 'template'},
      {
        Header: 'Создана', accessor: 'created_at',
        Cell: ({ cell: { value } }) => {
          const date  = new Date(value)
          const year = date.getFullYear() 
          const mounth = ('0' + date.getMonth()+1).slice(-2)
          const day =('0' + date.getDay()).slice(-2)  
              return (
                <>
                  {`${day}.${mounth}.${year}`}
                </>
              );
            }
      },
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
    },
    useSortBy);


  return (
    <table {...getTableProps()} className="table table-striped">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}
              className={
             column.isSorted
      ? column.isSortedDesc
        ? "sort-desc"
        : "sort-asc"
      : ""
  }>{column.render("Header")}{showArrow(column.isSortedDesc)} </th>
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
