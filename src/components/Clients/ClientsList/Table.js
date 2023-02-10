import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { useEffect, useMemo } from "react";
import { showMore } from "../../../reducers/clientsReducer";
import { fetchMoreClients } from "../../../actions/clients";
import { urlParams } from "../../../datatransforming/dataTRansform";
import { useHttp } from "../../../hooks/http.hook";
import "./Table.css";

export default function Table() {
  const { meta, passes } = useSelector((state) => state.clients.clientList);
  const { clientList, loadingStatus, loadintMoreStatus, search, limit, offset, ended } = useSelector(state => state.clients)
  const dispatch = useDispatch()
  const { request } = useHttp()

  const handleShowMore = () => {
    dispatch(showMore())
  }

  const drowStatus = () => {
    if (loadintMoreStatus === 'loading') {
       return <span>Загрузка ...</span>
    }
    if (loadintMoreStatus === 'error') {
       return <span>Ошибка ...</span>
    }
     if (loadintMoreStatus === 'idle' && !ended) {
       return (<button type="button" className="btn btn-secondary"
        onClick={() => handleShowMore()}>
        Показать еще
      </button>)
    }
    if (ended) {
      return <span>Конец списка</span>
    }
  }

  const showArrow = (col) => {
    if (col) {
      return <i className="bi bi-arrow-down-short"></i>;
    }
    if (col === false) {
      return <i className="bi bi-arrow-up-short"></i>;
    }
    if (col === undefined) {
      return "";
    }
  };

  const columns = useMemo(
    () => [
      { Header: "ФИО", accessor: "fio" },
      { Header: "ID Карты", accessor: "user_id" },
      { Header: "Макет карты", accessor: "template" },
      {
        Header: "Создана",
        accessor: "created_at",
        Cell: ({ cell: { value } }) => {
          const date = new Date(value);
          const year = date.getFullYear();
          const mounth = ("0" + date.getMonth() + 1).slice(-2);
          const day = ("0" + date.getDay()).slice(-2);
          return <>{`${day}.${mounth}.${year}`}</>;
        },
      },
      { Header: "Бонусы", accessor: "bonus" },
      { Header: "Скидка", accessor: "discount" },
      { Header: "Уровень лояльности", accessor: "loyalty_level" },
      { Header: "Сумма покупок за период", accessor: "summ" },
      { Header: "Общая сумма покупок", accessor: "summ_all" },
      { Header: "Последнее посещение", accessor: "date_last" },
      { Header: "Визиты за период", accessor: "visits" },
      { Header: "Всего визитов", accessor: "visits_all" },
      {
        Header: "Отправить PUSH",
        Cell: <i className="bi bi-send" style={{ margin: "10px" }}></i>,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: clientList,
      },
      useSortBy
    );

  return (
    <>
      <table {...getTableProps()} className="table table-striped">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={
                    column.isSorted
                      ? column.isSortedDesc
                        ? "sort-desc"
                        : "sort-asc"
                      : ""
                  }
                >
                  {column.render("Header")}
                  {showArrow(column.isSortedDesc)}{" "}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="container btn-container">
        {drowStatus()}
      </div>
    </>
  );
}
