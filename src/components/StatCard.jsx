// function StatCard({ title, value, color, icon }) {
  // return (
    // <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px", width: "180px", textAlign: "center" }}>
      // <div style={{ backgroundColor: color, width: "36px", height: "36px", borderRadius: "50%", margin: "0 auto" }}>
        // {icon}
      // </div>
      // <h4>{title}</h4>
      // <p>{value}</p>
    // </div>
  // );
// }

// export default StatCard;

import "./StatCard.css";

function StatCard({ title, value, icon, onClick }) {
   return (
   <button className="stat-float-card" onClick={onClick}>
       <div className="stat-float-icon">{icon}</div>
       <span className="stat-float-title">{title}</span>
       <span className="stat-float-value">{value}</span>
     </button>
   );
 }

 export default StatCard;
