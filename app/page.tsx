"use client";

import "./globals.css";

import { useEffect, useState } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay/hooks'
import TodaySchedule from "./todaysdate";

const HomePageQuery = graphql`query pageQuery($lat: Float!, $lon: Float!, $method: Int, $school: Int, $date: String) {
        getPrayerTimes(lat: $lat, lon: $lon, method: $method, school: $school, date: $date) {
            fajr
            dhuhr
            asr
            maghrib
            isha
            sunrise
        }
    }
`;

// Simple ImageWithFallback component to avoid missing symbol errors.
// It falls back to the provided fallback image if the main image fails to load.
function ImageWithFallback({ src, alt, className }: { src: string; alt?: string; className?: string }) {
    const [errored, setErrored] = useState(false);
    const fallback = '/assets/mosque.jpg';
    // Render a single img that fills its container. Keep it simple so callers can place
    // the element absolutely/fixed and size it with utility classes (w-full h-full etc.).
    return (
        <img
            src={errored ? fallback : src}
            alt={alt ?? ''}
            onError={() => setErrored(true)}
        />
    );
}

function to12HourIntl(hhmm: string) {
  const [hh, mm] = hhmm.split(":").map(Number);
  const d = new Date();
  d.setHours(hh, mm, 0, 0);

  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(d);
}

// BackgroundPortal is implemented in `client/BackgroundPortal.tsx`.

export default function HomePage() {
    const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

    // 1️⃣ Detect location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setCoords({
                    lat: pos.coords.latitude,
                    lon: pos.coords.longitude,
                });
            },
            (err) => {
                console.error("Location error:", err);
            }
        );
    }, []);


    const variables = coords ? {
        lat: coords.lat,
        lon: coords.lon,
        method: 2,
        school: 0,
    }
        : {
            lat: 0,
            lon: 0,
            method: 2,
            school: 0,
        };

    const data = useLazyLoadQuery(HomePageQuery, variables, {
        fetchPolicy: coords ? 'store-or-network' : 'store-only',
    });
    const prayerTimes = data.getPrayerTimes;

    // If coords not ready, show loading screen
    if (!coords) {
        return <div style={{ padding: "2rem", color: "white" }}>Detecting your location…</div>;
    }
    const locations = [{ id: 'mecca', label: 'Mecca' }, { id: 'medina', label: 'Medina' }];
    const cards = [
        { key: 'fajr', label: 'FAJR', time: to12HourIntl(prayerTimes.fajr), emoji: '🌅' },
        { key: 'sunrise', label: 'SUNRISE', time: to12HourIntl(prayerTimes.sunrise), emoji: '🌄' },
        { key: 'dhuhr', label: 'DHUHR', time: to12HourIntl(prayerTimes.dhuhr), emoji: '☀️' },
        { key: 'asr', label: 'ASR', time: to12HourIntl(prayerTimes.asr), emoji: '⛅' },
        { key: 'maghrib', label: 'MAGHRIB', time: to12HourIntl(prayerTimes.maghrib), emoji: '🏙️' },
        { key: 'isha', label: 'ISHA', time: to12HourIntl(prayerTimes.isha), emoji: '🌙' },
    ];

    const today = new Date();

    const formattedDate = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(today);


    return (
        <main className="page">
            <div className="background">
                <ImageWithFallback
                    src="/assets/mosque.jpg"
                    alt="Grand mosque"
                />
                <div className="overlay" />
            </div>

            {/* Header */}
            <header className="header">
                <h1>Prayer Times</h1>
                <TodaySchedule />
            </header>

            {/* Grid */}
            <section className="grid-wrapper">
                <div className="prayer-grid">
                    {cards.map((p) => (
                        <div key={p.key} className="prayer-card">
                            <div className="icon">{p.emoji}</div>
                            <div className="label">{p.label}</div>
                            <div className="time">{p.time}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer pill */}
            <footer className="footer">
                <div className="footer-pill">
                    ☪️ May your prayers be accepted ☪️
                </div>
            </footer>
        </main>
    );
}


