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
      price: Number(e.target.price.value),
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
      {/* TITRE + BOUTON À DROITE */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1>Liste des hôtels</h1>

        <button
          onClick={() => setShowForm(true)}
          style={{
            padding: "12px 20px",
            background: "#000",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Créer un nouvel hôtel
        </button>
      </div>

      {/* FORMULAIRE CENTRÉ + CLICK OUTSIDE */}
      {showForm && (
        <div
          onClick={() => setShowForm(false)}
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(0,0,0,0.2)",
            zIndex: 1000,
          }}
        >
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "25px",
              width: "460px",
              border: "1px solid #ddd",
            }}
          >
            <h3 style={{ marginBottom: "15px", textAlign: "center" }}>
              Ajouter un hôtel
            </h3>

            <input
              style={inputStyle}
              type="text"
              name="name"
              placeholder="Nom de l'hôtel"
              required
            />
            <input
              style={inputStyle}
              type="text"
              name="address"
              placeholder="Adresse"
              required
            />
            <input
              style={inputStyle}
              type="number"
              name="price"
              placeholder="Prix par nuit"
              required
            />

            {/* CHAMP IMAGE GRAND + ICONE */}
            <label
              style={{
                fontSize: "14px",
                marginBottom: "6px",
                display: "block",
              }}
            >
              Photo de l'hôtel
            </label>

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "150px",
                border: "1px solid #ccc",
                marginBottom: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "32px",
                color: "#888",
                cursor: "pointer",
              }}
            >
              <input
                type="file"
                name="image"
                accept="image/*"
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0,
                  cursor: "pointer",
                }}
              />
              <span role="img" aria-label="Ajouter une photo">📷</span>
            </div>

            <button
              type="submit"
              style={{
                padding: "12px",
                width: "100%",
                background: "#000",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Sauvegarder
            </button>
          </form>
        </div>
      )}

      {/* LISTE DES HOTELS */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
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
    </div>
  );
}

/* STYLE INPUT */
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
};

export default Hotels;