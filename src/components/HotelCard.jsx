                         function HotelCard({ name, address, price, images }) {
  return (
    <div style={{ width: "220px", border: "1px solid #ccc", borderRadius: "10px", overflow: "hidden" }}>
      <img src={images} alt={name} style={{ width: "100%", height: "140px", objectFit: "cover" }} />
      <div style={{ padding: "10px" }}>
        <h4>{name}</h4>
        <p>{address}</p>
        <p>{price} XOF / nuit</p>
      </div>
    </div>
  );
}

export default HotelCard;
