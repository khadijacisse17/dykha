import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#333", color: "#fff", padding: "20px", minHeight: "100vh" }}>
      <h2>Principal</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ margin: "15px 0" }}>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Tableau de bord</Link>
        </li>
        <li style={{ margin: "15px 0" }}>
          <Link to="/hotels" style={{ color: "#fff", textDecoration: "none" }}>Liste des hôtels</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
