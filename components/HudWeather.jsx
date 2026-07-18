"use client";
import { useEffect, useState } from "react";
import { Star } from "./Deco";

const NB = "latitude=40.4862&longitude=-74.4518";

function label(code) {
  if (code === 0) return "Clear";
  if (code <= 2) return "Fair";
  if (code === 3) return "Cloudy";
  if (code <= 48) return "Foggy";
  if (code <= 57) return "Drizzle";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  if (code <= 82) return "Showers";
  if (code <= 86) return "Snow";
  return "Storm";
}

export default function HudWeather() {
  const [date, setDate] = useState(null);
  const [wx, setWx] = useState(null);

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    );
    const ctrl = new AbortController();
    fetch(
      `https://api.open-meteo.com/v1/forecast?${NB}&current_weather=true&temperature_unit=fahrenheit`,
      { signal: ctrl.signal },
    )
      .then((r) => r.json())
      .then((d) => {
        const c = d && d.current_weather;
        if (c) setWx({ t: Math.round(c.temperature), code: c.weathercode });
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  return (
    <span>
      New Brunswick, NJ{date ? ` · ${date}` : ""} <Star />{" "}
      {wx ? `${label(wx.code)} · ${wx.t}°F` : "—"}
    </span>
  );
}
