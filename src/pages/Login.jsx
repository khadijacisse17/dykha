import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);   // l'utilisateur est connecté
    navigate("/");        // redirection vers le dashboard
  };

  return (
    <div className="login-container">
      <h1 className="app-title">RED PRODUCT</h1>
      <p className="login-subtitle">Connecter en tant qu'admin</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="admin@redproduct.com" required />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" placeholder="••••••••" required />
        </div>

        <div className="form-options">
          <label>
            <input type="checkbox" /> Garder moi connecté
          </label>
          <a href="#">Mot de passe oublié ?</a>
        </div>

        <button type="submit" className="login-btn">
          Se connecter
        </button>
      </form>

      <p className="register-text">
        Vous n'avez pas de compte ? <span>S'inscrire</span>
      </p>
    </div>
  );
}

export default Login;
