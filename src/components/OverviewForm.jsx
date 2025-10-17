import React from "react";

export default function OverviewForm({ overview, setOverview }) {
function handleChange(e) {
const { name, value } = e.target;
setOverview({ ...overview, [name]: value });
}

return (
<div className="card">
    <h3>Overview</h3>
    <input name="title" value={overview.title} onChange={handleChange} placeholder="Trip Title" />
    <input name="duration" value={overview.duration} onChange={handleChange} placeholder="Duration" />
    <input name="travellers" type="number" value={overview.travellers} onChange={handleChange} placeholder="Travellers" />
    <input name="departureFrom" value={overview.departureFrom} onChange={handleChange} placeholder="Departure From" />
    <input name="destination" value={overview.destination} onChange={handleChange} placeholder="Destination" />
    <label>Departure Date</label>
    <input name="departureDate" type="date" value={overview.departureDate} onChange={handleChange} />
    <label>Arrival Date</label>
    <input name="arrivalDate" type="date" value={overview.arrivalDate} onChange={handleChange} />
</div>
);
}
