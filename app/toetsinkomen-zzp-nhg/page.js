import { IBCalcPage } from "../components";

export const metadata = {
  title: "Toetsinkomen berekenen ZZP & IB-ondernemer met NHG",
  description: "Bereken gratis uw toetsinkomen als ZZP\u2019er of IB-ondernemer conform NHG-toetskaders. Inclusief balanstoets (solvabiliteit \u226525%, liquiditeit \u22651). Geen registratie nodig.",
  alternates: { canonical: "https://zakelijkinkomenberekenen.nl/toetsinkomen-zzp-nhg" },
  openGraph: {
    title: "Toetsinkomen berekenen ZZP & IB-ondernemer met NHG",
    description: "Bereken uw toetsinkomen als IB-ondernemer conform NHG-toetskaders. Inclusief balanstoets.",
  },
};

export default function Page() {
  return <IBCalcPage nhg={true} />;
}
