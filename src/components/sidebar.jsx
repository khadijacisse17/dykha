import { Link } from "react-router-dom";
import { FaTachometerAlt, FaHotel } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Sidebar.css";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      <div 
        className="hamburger" 
        style={{ position: 'fixed', top: 15, left: 15, zIndex: 1100, background: '#fff', padding: '6px 8px', borderRadius: '6px', cursor: 'pointer' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu size={28} color="#000" />
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Principal</h2>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/hotels" onClick={() => setIsOpen(false)}>
              <FaHotel /> Liste des hôtels
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
