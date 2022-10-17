import "./Login.css";

const Login = () => {
  return (
    <div className="fondo">
      <div className="main">
        <div className="LoginForm">
          <h2>Log in</h2>
          <div className="FormElement">
            <label for="email">Email</label>
            <input
              type="text"
              className="EmailInput"
              placeholder="Ingresar email"
            />
          </div>
          <div className="FormElement">
            <label for="password">Password</label>
            <input
              type="password"
              className="PasswordlInput"
              placeholder="Ingresar password"
            />
          </div>
          <div className="FormElement">
            <input
              type="checkbox"
              className="RememberInput"
              placeholder="Ingresar password"
            />
            <label for="remember-me">Recuerdame</label>
          </div>
          <div className="FormElement">
            <button>Entrar</button>
          </div>
          <div className="FormElement">
            <a href="#">Olvide password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
