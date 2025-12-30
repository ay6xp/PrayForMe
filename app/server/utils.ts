type PrayerTimesResult = {
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  sunrise: string;
};

export const sendSalams = (): string => {
  return 'Assalamu Alaikum wa Rahmatullahi wa Barakatuhu!!';
};

export const getPrayerTimes = async ({
  lat,
  lon,
  method = 2,
  school = 0,
  date,
}: {
  lat: number;
  lon: number;
  method?: number;
  school?: number;
  date?: string;
}): Promise<PrayerTimesResult> => {
  if (lat == null || lon == null) {
    throw new Error(`lat and lon are required. Got lat=${lat}, lon=${lon}`);
  }

  const base = 'https://api.aladhan.com/v1';
  const path = date ? `/timings/${date}` : '/timings';

  const url = new URL(base + path);
  url.searchParams.set('latitude', String(lat));
  url.searchParams.set('longitude', String(lon));
  url.searchParams.set('method', String(method));
  url.searchParams.set('school', String(school));

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch prayer times: ${response.statusText}`);
  }

  const json = await response.json();

  // Aladhan response shape: json.data.timings.Fajr, etc.
  const t = json?.data?.timings;
  if (!t) {
    console.error('Unexpected Aladhan response:', json);
    throw new Error('Unexpected prayer time response from API');
  }

  return {
    fajr: t.Fajr,
    dhuhr: t.Dhuhr,
    asr: t.Asr,
    maghrib: t.Maghrib,
    isha: t.Isha,
    sunrise: t.Sunrise,
  };
};