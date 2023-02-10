import React from "react";
import "./Modal.css";

export default function ModalWin({ active, closeActive }) {
  const auth_key = localStorage.getItem("auth_key");
  const auth_token = localStorage.getItem("auth_token");
  const refId = React.createRef();
  const refMes = React.createRef();

  const handleClick = () => {
    if (refId.current.value.length < 1 && refMes.current.value.length < 1) {
      alert("Заполните поля ввода");
    }
    const link = `https://api.asgk-group.ru/v1/${auth_token}/message/push`;
    fetch(link, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: auth_key,
      },
      body: JSON.stringify({
        user_id: refId.current.value,
        push_message: refMes.current.value,
      }),
    }).then((response) => {
      if (response.ok) {
        alert("Сообщение отправлено");
      } else {
        alert("Ошибка, поторите позже");
      }
    });
  };

  return (
    <div className={active ? "modal active" : "modal"}>
      <div className="modal-content">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            ID Карты
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            ref={refId}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Введите сообщение
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            ref={refMes}
          ></textarea>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              handleClick();
            }}
          >
            Отправить
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => closeActive()}
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}
