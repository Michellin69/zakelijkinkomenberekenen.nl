import { IBCalcPage } from "../components";

export const metadata = {
  title: "Toetsinkomen berekenen ZZP & IB-ondernemer (regulier)",
  description: "Bereken gratis uw toetsinkomen als ZZP\u2019er, eenmanszaak of VoF conform reguliere normen. Inclusief balanstoets met solvabiliteit en liquiditeit. Geen registratie nodig.",
  alternates: { canonical: "https://zakelijkinkomenberekenen.nl/toetsinkomen-zzp" },
  openGraph: {
    title: "Toetsinkomen berekenen ZZP & IB-ondernemer (regulier)",
    description: "Bereken uw toetsinkomen als IB-ondernemer voor een hypotheek bij reguliere geldverstrekkers. Inclusief balanstoets.",
  },
};

export default function Page() {
  return <IBCalcPage nhg={false} />;
}
