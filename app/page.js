import { HomePage } from "./components";

export const metadata = {
  title: "Zakelijk Inkomen Berekenen | Toetsinkomen calculator voor ondernemers",
  description: "Bereken gratis uw toetsinkomen als ondernemer voor uw hypotheekaanvraag. IB-ondernemer, DGA, ZZP, NHG en regulier. Inclusief balanstoets. Geen registratie nodig.",
  alternates: { canonical: "https://zakelijkinkomenberekenen.nl" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat is toetsinkomen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Het toetsinkomen is het inkomen waarmee een geldverstrekker berekent hoeveel hypotheek u maximaal kunt krijgen. Voor ondernemers is dat geen vast salaris, maar een berekening op basis van de winst of het salaris van de afgelopen jaren, waarbij ook wordt gekeken of uw onderneming financieel gezond is."
      }
    },
    {
      "@type": "Question",
      "name": "Wat is het verschil tussen toetsinkomen met en zonder NHG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voor een IB-ondernemer wordt met NHG altijd gekeken naar de winst uit uw eenmanszaak of vof, plus eventueel inkomen uit loondienst, over de afgelopen drie jaar. Zonder NHG gebruiken geldverstrekkers ook andere rekenmethodes om uw inkomen te bepalen, zoals een gewogen gemiddelde. Voor een DGA telt met NHG maximaal 75% van de overwinst mee als toetsinkomen. Zonder NHG verschilt dit per geldverstrekker en kan soms ook 100% van de overwinst worden meegenomen."
      }
    },
    {
      "@type": "Question",
      "name": "Tot welk bedrag is een hypotheek met NHG mogelijk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In 2026 is een hypotheek met NHG mogelijk bij een aankoopbedrag tot maximaal € 470.000. Ligt het aankoopbedrag hoger, dan sluit u een hypotheek zonder NHG af. De NHG-grens wordt elk jaar opnieuw vastgesteld."
      }
    },
    {
      "@type": "Question",
      "name": "Wat is de balanstoets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Met de balanstoets beoordeelt de geldverstrekker of uw onderneming financieel gezond is. Er wordt gekeken naar de solvabiliteit (hoeveel van het totale vermogen eigen vermogen is) en de liquiditeit (of de onderneming haar kortlopende schulden kan betalen). Bij een DGA komt daar de dubbele balanstoets bij: er wordt berekend hoeveel er maximaal uit de BV kan worden uitgekeerd met behoud van voldoende solvabiliteit en liquiditeit. De laagste van die twee bepaalt hoeveel overwinst kan meetellen."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomePage />
    </>
  );
}import { HomePage } from "./components";

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
