import "./globals.css";
import { Nav, Footer } from "./components";

export const metadata = {
  metadataBase: new URL("https://zakelijkinkomenberekenen.nl"),
  title: {
    default: "Zakelijk Inkomen Berekenen | Toetsinkomen calculator voor ondernemers",
    template: "%s | zakelijkinkomenberekenen.nl",
  },
  description: "Bereken gratis uw toetsinkomen als ondernemer voor uw hypotheekaanvraag. IB-ondernemer, DGA, ZZP, NHG en regulier. Inclusief balanstoets. Geen registratie nodig.",
  keywords: ["toetsinkomen berekenen", "zakelijk inkomen", "hypotheek ondernemer", "zzp hypotheek", "dga hypotheek", "nhg ondernemer", "toetsinkomen zzp", "toetsinkomen dga", "balanstoets hypotheek", "rekenexpert"],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "zakelijkinkomenberekenen.nl",
    title: "Zakelijk Inkomen Berekenen | Toetsinkomen calculator voor ondernemers",
    description: "Bereken gratis uw toetsinkomen als ondernemer. Inclusief balanstoets. Door Lindenburg Financieel Advies.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
