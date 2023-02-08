import './Authorization.css'

export default function Authorization() {
    return (
      <div className="form-signin w-100 m-auto">
    <form>
      <h1 className="h3 mb-3 fw-normal text-center">Пожалуйста, авторизуйтесь</h1>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Логин</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Пароль</label>
      </div>
      <button classNameName="w-100 btn btn-lg btn-primary" type="submit">
        Войти
      </button>
            </form>
            </div>
  );
}
