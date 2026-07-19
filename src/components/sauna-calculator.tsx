"use client";

import { useMemo, useState } from "react";

type Unit = "feet" | "meters";

function asNumber(value: string) {
  const number = Number.parseFloat(value);
  return Number.isFinite(number) && number >= 0 ? number : 0;
}

export function SaunaCalculator() {
  const [unit, setUnit] = useState<Unit>("feet");
  const [length, setLength] = useState("7");
  const [width, setWidth] = useState("6");
  const [height, setHeight] = useState("7");
  const [hardSurface, setHardSurface] = useState("0");

  const result = useMemo(() => {
    const raw = asNumber(length) * asNumber(width) * asNumber(height);
    const cubicMeters = unit === "feet" ? raw * 0.0283168 : raw;
    const cubicFeet = unit === "feet" ? raw : raw * 35.3147;
    const squareMeters = unit === "feet" ? asNumber(hardSurface) * 0.092903 : asNumber(hardSurface);
    return { cubicMeters, cubicFeet, squareMeters };
  }, [height, length, width, hardSurface, unit]);

  function switchUnit(next: Unit) {
    if (next === unit) return;
    const multiplier = next === "meters" ? 0.3048 : 3.28084;
    const areaMultiplier = next === "meters" ? 0.092903 : 10.7639;
    setLength((asNumber(length) * multiplier).toFixed(2));
    setWidth((asNumber(width) * multiplier).toFixed(2));
    setHeight((asNumber(height) * multiplier).toFixed(2));
    setHardSurface((asNumber(hardSurface) * areaMultiplier).toFixed(2));
    setUnit(next);
  }

  return (
    <div className="calculator-card">
      <div className="unit-toggle" aria-label="Measurement unit">
        <button type="button" className={unit === "feet" ? "active" : ""} onClick={() => switchUnit("feet")} aria-pressed={unit === "feet"}>Feet + inches</button>
        <button type="button" className={unit === "meters" ? "active" : ""} onClick={() => switchUnit("meters")} aria-pressed={unit === "meters"}>Meters</button>
      </div>
      <div className="calculator-fields">
        <label><span>Finished length</span><input type="number" min="0" step="0.01" inputMode="decimal" value={length} onChange={(event) => setLength(event.target.value)} /><em>{unit === "feet" ? "ft" : "m"}</em></label>
        <label><span>Finished width</span><input type="number" min="0" step="0.01" inputMode="decimal" value={width} onChange={(event) => setWidth(event.target.value)} /><em>{unit === "feet" ? "ft" : "m"}</em></label>
        <label><span>Finished height</span><input type="number" min="0" step="0.01" inputMode="decimal" value={height} onChange={(event) => setHeight(event.target.value)} /><em>{unit === "feet" ? "ft" : "m"}</em></label>
        <label><span>Glass, masonry, or other uninsulated area</span><input type="number" min="0" step="0.01" inputMode="decimal" value={hardSurface} onChange={(event) => setHardSurface(event.target.value)} /><em>{unit === "feet" ? "sq ft" : "m²"}</em></label>
      </div>
      <div className="calculator-result" aria-live="polite">
        <span>Finished room volume</span>
        <strong>{Math.round(result.cubicFeet).toLocaleString("en-US")} ft³</strong>
        <em>{result.cubicMeters.toFixed(2)} m³</em>
      </div>
      {result.squareMeters > 0 && <p className="surface-note">You entered {result.squareMeters.toFixed(2)} m² of uninsulated surface. Heater makers often add an equivalent-volume adjustment for glass or masonry, but the factor varies. Apply the exact method in the shortlisted heater manual.</p>}
    </div>
  );
}
