"use client";
import { useEffect, useState } from "react";
import {
  BobaTile,
  CampusTile,
  CharacterTile,
  LanternTile,
} from "./art/Illustrations";

const LABELS = ["Loading / 00", "Culture / 01", "Community / 02"];

/**
 * The hero collage. Cycling `data-state` re-lays out the four tiles — site.css
 * owns the geometry for each state, this only advances the counter.
 */
export default function HeroMosaic() {
  const [state, setState] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setState((value) => (value + 1) % LABELS.length),
      3600,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="hero-mosaic" data-state={state} aria-hidden="true">
      <span className="mosaic-status">{LABELS[state]}</span>
      <div className="tile tile-a">
        <CampusTile />
      </div>
      <div className="tile tile-b">
        <CharacterTile />
      </div>
      <div className="tile tile-c">
        <LanternTile />
      </div>
      <div className="tile tile-d">
        <BobaTile />
      </div>
    </div>
  );
}
