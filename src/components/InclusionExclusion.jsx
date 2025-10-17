import React from "react";

export default function InclusionExclusion({ extras, setExtras }) {
return (
<div className="card">
    <h3>Inclusions & Exclusions</h3>
    <textarea
    placeholder="Inclusions"
    value={extras.inclusions}
    onChange={(e) => setExtras({ ...extras, inclusions: e.target.value })}
    />
    <textarea
    placeholder="Exclusions"
    value={extras.exclusions}
    onChange={(e) => setExtras({ ...extras, exclusions: e.target.value })}
    />
</div>
);
}
