import { DGACalcPage } from "../components";

export const metadata = {
  title: "Toetsinkomen berekenen DGA / BV (regulier)",
  description: "Bereken gratis uw toetsinkomen als DGA of directeur-grootaandeelhouder conform reguliere normen. Inclusief dubbele balanstoets en 100% overwinst. Geen registratie nodig.",
  alternates: { canonical: "https://zakelijkinkomenberekenen.nl/toetsinkomen-dga" },
  openGraph: {
    title: "Toetsinkomen berekenen DGA / BV (regulier)",
    description: "Bereken uw toetsinkomen als DGA voor een hypotheek bij reguliere geldverstrekkers. Inclusief dubbele balanstoets.",
  },
};

export default function Page() {
  return <DGACalcPage nhg={false} />;
}
