export default function sitemap() {
  const base = "https://zakelijkinkomenberekenen.nl";
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/toetsinkomen-zzp`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/toetsinkomen-zzp-nhg`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/toetsinkomen-dga`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/toetsinkomen-dga-nhg`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
