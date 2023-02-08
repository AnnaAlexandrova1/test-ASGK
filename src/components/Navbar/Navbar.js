import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/authReduser";
import "./Navbar.css";

export default function Navbar() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  return (
    <div className="wrap-header">
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="outh-out-block">
          <h1 className="text-center">RFM-анализ</h1>
        </div>
      </div>
      {isAuth && (
        <div className="out-block-user">
          <span className="navbar-text">{currentUser}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => dispatch(logout())}
          >
            Выход
          </button>
        </div>
      )}
    </div>
  );
}
