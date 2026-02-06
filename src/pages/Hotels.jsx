import { useState } from "react";
import HotelCard from "../components/HotelCard";
import hotel1 from "../assets/images/hotel1.jpg";
import hotel2 from "../assets/images/hotel2.jpg";
import hotel3 from "../assets/images/hotel3.jpg";
import hotel4 from "../assets/images/hotel4.jpg";

const hotelsData = [
  { name: "Hôtel Terrou-Bi", address: "Dakar", price: 25000, images: hotel1 },
  { name: "Hôtel Pullman", address: "Plateau", price: 20000, images: hotel2 },
  { name: "Hôtel King Fahd", address: "Almadies", price: 30000, images: hotel3 },
  { name: "Hôtel Radisson", address: "Dakar", price: 22000, images: hotel4 },
];

function Hotels() {
  const [hotels, setHotels] = useState(hotelsData);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHotel = {
      name: e.target.name.value,
      address: e.target.address.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      price: Number(e.target.price.value),
      currency: e.target.currency.value,
      images: e.target.image.files[0]
        ? URL.createObjectURL(e.target.image.files[0])
        : hotel1,
    };

    setHotels([newHotel, ...hotels]);
    e.target.reset();
    setShowForm(false);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Liste des hôtels</h1>

      <button
        onClick={() => setShowForm(true)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          background: "#e53935",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Créer un nouvel hôtel
      </button>

      {/* LISTE DES HOTELS */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            name={hotel.name}
            address={hotel.address}
            price={hotel.price}
            images={hotel.images}
          />
        ))}
      </div>

      {/* MODAL FORMULAIRE */}
      {showForm && (
        <div style={overlayStyle}>
          <form onSubmit={handleSubmit} style={modalStyle}>
            <h2>Ajouter un hôtel</h2>

            <input type="text" name="name" placeholder="Nom de l'hôtel" required />
            <input type="text" name="address" placeholder="Adresse" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="Téléphone" required />
            <input type="number" name="price" placeholder="Prix par nuit" required />
            <input type="text" name="currency" placeholder="Devise" required />
            <input type="file" name="image" accept="image/*" />

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
              <button type="submit" style={saveBtn}>
                Enregistrer
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={cancelBtn}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

/* STYLES */
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const saveBtn = {
  flex: 1,
  padding: "10px",
  background: "#e53935",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const cancelBtn = {
  flex: 1,
  padding: "10px",
  background: "#ccc",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

export default Hotels;
