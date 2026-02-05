function StatCard({ title, value, color, icon }) {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "10px", width: "180px", textAlign: "center" }}>
      <div style={{ backgroundColor: color, width: "36px", height: "36px", borderRadius: "50%", margin: "0 auto" }}>
        {icon}
      </div>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}

export default StatCard;
