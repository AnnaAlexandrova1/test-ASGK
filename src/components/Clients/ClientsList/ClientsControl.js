import { tHeads } from "../../../datatransforming/dataTRansform";
import { useDispatch, useSelector } from "react-redux";
import { searchDelete } from "../../../reducers/clientsReducer";
import "./ClientsControl.css";

export default function ClientsControl() {
  const dispatch = useDispatch();

  const {
    clientList,
    loadingStatus,
    loadintMoreStatus,
    search,
    limit,
    offset,
    ended,
  } = useSelector((state) => state.clients);

  const drowSearch = () => {
    let data = "";
    for (let key in search) {
      if (search[key].length > 0) {
        let p = tHeads.filter((item) => item.accessor === key);
        data += p[0].Header;
      }
    }
    return data;
  };

  return (
    <div className="container header-control">
      <span>Поиск по:</span>
      <span className="control-search">{drowSearch()}</span>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          dispatch(searchDelete());
        }}
      >
        Сбросить поиск
      </button>
    </div>
  );
}
