import React, { useState, useRef } from "react";
import OverviewForm from "./components/OverviewForm";
import DayPlanner from "./components/DayPlanner";
import HotelForm from "./components/HotelForm";
import PaymentPlan from "./components/PaymentPlan";
import InclusionExclusion from "./components/InclusionExclusion";
import PdfPreview from "./components/PdfPreview";
import generatePDF from "./utils/pdfGenerator";
import "./index.css";

export default function App() {
  const [overview, setOverview] = useState({
    title: "Singapore Itinerary",
    duration: "4 Days 3 Nights",
    travellers: 2,
    departureFrom: "Mumbai",
    departureDate: "2025-10-31",
    arrivalDate: "2025-11-01",
    destination: "Singapore",
  });

  const [days, setDays] = useState([
    { label: "Day 1", date: "", morning: "", afternoon: "", evening: "", transport: "" },
  ]);

  const [hotels, setHotels] = useState([]);
  const [installments, setInstallments] = useState([]);
  const [extras, setExtras] = useState({ inclusions: "", exclusions: "" });

  const previewRef = useRef(null);

  return (
    <div className="app-container">
      <div className="form-section">
        <h1>Itinerary Builder</h1>
        <OverviewForm overview={overview} setOverview={setOverview} />
        <DayPlanner days={days} setDays={setDays} />
        <HotelForm hotels={hotels} setHotels={setHotels} />
        <PaymentPlan installments={installments} setInstallments={setInstallments} />
        <InclusionExclusion extras={extras} setExtras={setExtras} />
        <button className="generate-btn" onClick={() => generatePDF(previewRef, overview.title)}>
          Generate PDF
        </button>
      </div>

      <div className="preview-section">
        <PdfPreview
          ref={previewRef}
          overview={overview}
          days={days}
          hotels={hotels}
          installments={installments}
          extras={extras}
        />
      </div>
    </div>
  );
}

