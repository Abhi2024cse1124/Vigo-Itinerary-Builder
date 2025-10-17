import React from "react";

export default function DayPlanner({ days, setDays }) {
const addDay = () => setDays([...days, { label: `Day ${days.length + 1}`, date: "", morning: "", afternoon: "", evening: "", transport: "" }]);
const removeDay = (i) => setDays(days.filter((_, idx) => idx !== i));

const updateDay = (i, key, val) => {
const newDays = [...days];
newDays[i][key] = val;
setDays(newDays);
};

return (
<div className="card">
    <h3>Itinerary Days</h3>
    {days.map((d, i) => (
    <div key={i} className="day-card">
        <div className="flex">
        <input value={d.label} onChange={(e) => updateDay(i, "label", e.target.value)} />
        <input type="date" value={d.date} onChange={(e) => updateDay(i, "date", e.target.value)} />
        <button onClick={() => removeDay(i)}>Remove</button>
        </div>
        <textarea placeholder="Morning" value={d.morning} onChange={(e) => updateDay(i, "morning", e.target.value)} />
        <textarea placeholder="Afternoon" value={d.afternoon} onChange={(e) => updateDay(i, "afternoon", e.target.value)} />
        <textarea placeholder="Evening" value={d.evening} onChange={(e) => updateDay(i, "evening", e.target.value)} />
        <input placeholder="Transport/Flight" value={d.transport} onChange={(e) => updateDay(i, "transport", e.target.value)} />
    </div>
    ))}
    <button onClick={addDay}>+ Add Day</button>
</div>
);
}
