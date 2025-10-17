import React from "react";

export default function PaymentPlan({ installments, setInstallments }) {
const addInstallment = () =>
setInstallments([...installments, { name: `Installment ${installments.length + 1}`, amount: "", due: "" }]);

const updateInstallment = (i, key, val) => {
const newPay = [...installments];
newPay[i][key] = val;
setInstallments(newPay);
};

return (
<div className="card">
    <h3>Payment Plan</h3>
    {installments.map((it, i) => (
    <div key={i} className="flex">
        <input value={it.name} onChange={(e) => updateInstallment(i, "name", e.target.value)} />
        <input value={it.amount} onChange={(e) => updateInstallment(i, "amount", e.target.value)} />
        <input value={it.due} onChange={(e) => updateInstallment(i, "due", e.target.value)} />
    </div>
    ))}
    <button onClick={addInstallment}>+ Add Installment</button>
</div>
);
}
