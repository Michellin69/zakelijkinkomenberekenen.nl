import './globals.css';

export const metadata = {
  title: 'Zakelijk Inkomen Berekenen — Toetsinkomen calculator voor ondernemers',
  description: 'Bereken gratis uw toetsinkomen als ondernemer voor uw hypotheekaanvraag. IB-ondernemer, DGA, NHG en regulier. Geen registratie nodig.',
  keywords: 'toetsinkomen, zakelijk inkomen, hypotheek ondernemer, zzp hypotheek, dga hypotheek, nhg ondernemer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
