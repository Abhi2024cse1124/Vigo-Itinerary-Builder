import React from "react";

export default function HotelForm({ hotels, setHotels }) {
const addHotel = () => setHotels([...hotels, { city: "", name: "", checkIn: "", checkOut: "", nights: 1 }]);
const updateHotel = (i, key, val) => {
const newHotels = [...hotels];
newHotels[i][key] = val;
setHotels(newHotels);
};

return (
<div className="card">
    <h3>Hotel Details</h3>
    {hotels.map((h, i) => (
    <div key={i} className="hotel-card">
        <input placeholder="City" value={h.city} onChange={(e) => updateHotel(i, "city", e.target.value)} />
        <input placeholder="Hotel Name" value={h.name} onChange={(e) => updateHotel(i, "name", e.target.value)} />
        <input type="date" value={h.checkIn} onChange={(e) => updateHotel(i, "checkIn", e.target.value)} />
        <input type="date" value={h.checkOut} onChange={(e) => updateHotel(i, "checkOut", e.target.value)} />
        <input type="number" value={h.nights} onChange={(e) => updateHotel(i, "nights", e.target.value)} />
    </div>
    ))}
    <button onClick={addHotel}>+ Add Hotel</button>
</div>
);
}
