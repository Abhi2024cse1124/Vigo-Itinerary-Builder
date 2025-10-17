import React, { forwardRef } from "react";

const PdfPreview = forwardRef(({ overview, days, hotels, installments, extras }, ref) => (
<div ref={ref} className="pdf-preview">
<div className="pdf-header">
    <h2>{overview.title}</h2>
    <p>{overview.duration} • {overview.travellers} Travellers</p>
</div>

{days.map((d, i) => (
    <div key={i} className="pdf-day">
    <h4>{d.label} - {d.date}</h4>
    <p><b>Morning:</b> {d.morning}</p>
    <p><b>Afternoon:</b> {d.afternoon}</p>
    <p><b>Evening:</b> {d.evening}</p>
    <p><b>Transport:</b> {d.transport}</p>
    </div>
))}

<h3>Hotels</h3>
{hotels.map((h, i) => (
    <p key={i}>{h.name}, {h.city} ({h.checkIn} to {h.checkOut})</p>
))}

<h3>Payment Plan</h3>
{installments.map((it, i) => (
    <p key={i}>{it.name}: ₹{it.amount} - {it.due}</p>
))}

<h3>Inclusions</h3>
<p>{extras.inclusions}</p>

<h3>Exclusions</h3>
<p>{extras.exclusions}</p>
</div>
));

export default PdfPreview;
