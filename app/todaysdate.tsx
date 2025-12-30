"use client";

import { useEffect, useState } from "react";

export default function TodaySchedule() {
  const [gregorian, setGregorian] = useState("");
  const [hijri, setHijri] = useState("");

  useEffect(() => {
    const d = new Date();

    setGregorian(
      new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(d)
    );

    setHijri(
      new Intl.DateTimeFormat("en-US-u-ca-islamic-umalqura", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(d)
    );
  }, []);

  if (!gregorian) return null;

  return (
    <p>
      Today’s Schedule – {gregorian} <br />
      <span style={{ opacity: 0.9 }}>Hijri: {hijri}</span>
    </p>
  );
}
