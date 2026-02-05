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
    <div style={{ display: "flex", flexWrap: "wrap", gap: "25px" }}>
      <StatCard title="formulaires" value="150" color="blue" icon={<AiOutlineFile />} />
      <StatCard title="utilisateurs" value="75" color="green" icon={<AiOutlineUser />} />
      <StatCard title="messages" value="30" color="orange" icon={<AiOutlineMessage />} />
      <StatCard title="emails" value="120" color="red" icon={<AiOutlineMail />} />
      <StatCard title="hôtels" value="20" color="purple" icon={<AiOutlineHome />} />
      <StatCard title="données" value="500GB" color="teal" icon={<AiOutlineDatabase />} />
    </div>
  );
}

export default TableauBord;
