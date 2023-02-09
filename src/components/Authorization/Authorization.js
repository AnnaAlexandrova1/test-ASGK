import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser } from "../../actions/user";
import { auth } from "../../actions/user";
import "./Authorization.css";

export default function Authorization() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  // при клике сразу получаем по ключу авторизации токен для дальнейших действий
  const handleClick = (e) => {
    e.preventDefault();
    if (login.length < 1 && password.length < 1) {
      alert("Подалуйста, введите логин и пароль");
      return;
    }
    async function geet() {
      try {
        await dispatch(loginUser(login, password))
        await dispatch(auth())
      } catch(error) {
        alert(console.error())
      }
    }
    geet()
  };

  return (
    <div className="form-signin w-100 m-auto">
      <form>
        <h1 className="h3 mb-3 fw-normal text-center">
          Пожалуйста, авторизуйтесь
        </h1>

        <div className="form-floating">
          <input
            //value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Введите логин"
          />
          <label htmlFor="floatingInput">Логин</label>
        </div>
        <div className="form-floating">
          <input
            //value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Введите пароль"
          />
          <label htmlFor="floatingPassword">Пароль</label>
        </div>
        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={(e) => handleClick(e)}>
          Войти
        </button>
      </form>
    </div>
  );
}
