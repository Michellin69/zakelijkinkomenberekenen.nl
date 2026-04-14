import './globals.css';

export const metadata = {
  title: 'Zakelijk Inkomen Berekenen — Toetsinkomen calculator voor ondernemers',
  description: 'Krijg direct een indicatie van uw toetsinkomen voor een hypotheekaanvraag –
  op basis van uw winst, salaris en balanscijfers. Inclusief controle op de
  financiële positie van uw onderneming.',
  keywords: 'toetsinkomen, zakelijk inkomen, hypotheek ondernemer, zzp hypotheek, dga hypotheek, nhg ondernemer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
