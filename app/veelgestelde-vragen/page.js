import { HomePage } from "./components";

export const metadata = {
  title: "Zakelijk Inkomen Berekenen | Toetsinkomen calculator voor ondernemers",
  description: "Bereken gratis uw toetsinkomen als ondernemer voor uw hypotheekaanvraag. IB-ondernemer, DGA, ZZP, NHG en regulier. Inclusief balanstoets. Geen registratie nodig.",
  alternates: { canonical: "https://zakelijkinkomenberekenen.nl" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat is toetsinkomen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Het toetsinkomen is het inkomen dat een geldverstrekker hanteert om te bepalen hoeveel hypotheek u kunt krijgen. Voor ondernemers wordt dit berekend op basis van de winst of het salaris van de afgelopen jaren.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is het verschil tussen NHG en regulier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bij NHG (Nationale Hypotheek Garantie) wordt 75% van de overwinst meegenomen, bij reguliere geldverstrekkers is dat 100%. NHG biedt een vangnet bij betalingsproblemen maar kent ook een maximale hypotheekgrens.",
      },
    },
    {
      "@type": "Question",
      name: "Wat is de balanstoets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "De balanstoets beoordeelt de financi\u00EBle gezondheid van uw onderneming. Er wordt gekeken naar solvabiliteit en liquiditeit.",
      },
    },
    {
      "@type": "Question",
      name: "Zijn mijn gegevens veilig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Alle berekeningen worden volledig in uw browser uitgevoerd. Er worden geen gegevens verstuurd naar een server en er wordt niets opgeslagen.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomePage />
    </>
  );
}
