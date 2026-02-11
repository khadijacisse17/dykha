import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);

    if (remember) {
      localStorage.setItem("isLoggedIn", "true");
    }

    navigate("/");
  };

  return (
    <>
      <style>{`
        body {
          background: #2f2f2f;
          font-family: Arial, sans-serif;
        }

        .login-page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-card {
          background: white;
          width: 450px;
          padding: 40px;
          border-radius: 14px;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6);
          text-align: center;
        }

        .subtitle {
          color: #666;
          margin-bottom: 25px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .login-form input {
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }

        .login-form button {
          margin-top: 10px;
          padding: 12px;
          background: black;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: bold;
          cursor: pointer;
        }

        .login-form button:hover {
          background: #222;
        }

        .links {
          margin-top: 15px;
          font-size: 13px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .links a {
          color: #f1c40f;
          text-decoration: none;
          font-weight: 600;
        }

        .links a:hover {
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .login-card {
            width: 90%;
            padding: 25px;
          }
        }
      `}</style>

      <div className="login-page">
        <div className="login-card">
          <h1>RED PRODUCT</h1>
          <p className="subtitle">Connexion administrateur</p>

          <form onSubmit={handleSubmit} className="login-form">
            <input type="email" placeholder="Email (optionnel)" />
            <input type="password" placeholder="Mot de passe (optionnel)" />

            <label className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Se souvenir de moi
            </label>

            <button type="submit">Se connecter</button>
          </form>

          <div className="links">
            <Link to="/forgot-password">Mot de passe oublié ?</Link>
            <Link to="/register">S'inscrire</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
