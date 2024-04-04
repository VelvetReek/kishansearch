"use client";
import { useState, useEffect } from "react";
import { spectral } from "./fonts";

export default function DateTime() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className={spectral.className}>
      <h1 className="text-slate-800 font-light text-sm md:font-medium md:text-base">
        {currentDateTime} IST
      </h1>
    </div>
  );
}
