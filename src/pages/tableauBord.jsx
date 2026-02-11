import "./TableauBord.css";
import StatCard from "../components/StatCard";
import {
  AiOutlineFile,
  AiOutlineUser,
  AiOutlineMessage,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineDatabase,
} from "react-icons/ai";

function TableauBord() {
  return (
    <div className="stats">
      {/* Ligne 1 */}
      <StatCard title="Formulaires" value="148" icon={<AiOutlineFile />} />
      <StatCard title="Utilisateurs" value="73" icon={<AiOutlineUser />} />
      <StatCard title="Messages" value="27" icon={<AiOutlineMessage />} />

      {/* Ligne 2 */}
      <StatCard title="Emails" value="118" icon={<AiOutlineMail />} />
      <StatCard title="Hôtels" value="21" icon={<AiOutlineHome />} />
      <StatCard title="Données" value="487 GB" icon={<AiOutlineDatabase />} />
    </div>
  );
}

export default TableauBord;
