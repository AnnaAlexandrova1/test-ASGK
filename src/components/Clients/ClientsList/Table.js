import "bootstrap-icons/font/bootstrap-icons.css";
import { useDispatch, useSelector } from "react-redux";
import { useTable, useSortBy } from "react-table";
import { useEffect, useMemo } from "react";
import { showMore } from "../../../reducers/clientsReducer";
import { fetchMoreClients } from "../../../actions/clients";
import {
  urlParams,
  tHeads,
  tHeadsModify,
} from "../../../datatransforming/dataTRansform";
import { useHttp } from "../../../hooks/http.hook";
import "./Table.css";

export default function Table() {
  const {
    clientList,
    loadingStatus,
    loadintMoreStatus,
    search,
    limit,
    offset,
    ended,
  } = useSelector((state) => state.clients);
  const dispatch = useDispatch();

  const handleShowMore = () => {
    dispatch(showMore());
  };

  const drowStatus = () => {
    if (loadintMoreStatus === "loading") {
      return <span>Загрузка ...</span>;
    }
    if (loadintMoreStatus === "error") {
      return <span>Ошибка ...</span>;
    }
    if (loadintMoreStatus === "idle" && !ended) {
      return (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => handleShowMore()}
        >
          Показать еще
        </button>
      );
    }
    if (ended) {
      return <span>Конец списка</span>;
    }
  };

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

  const columns = useMemo(() => tHeads, []);

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
          <tr>
            {tHeads.map(item => {
              return <td>
                <input type="text" class="поиск" placeholder="поиск" aria-label="поиск" aria-describedby="basic-addon2" style={{width: "90%"}}></input>
              </td>
            })}
              </tr>
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

      <div className="container btn-container">{drowStatus()}</div>
    </>
  );
}
