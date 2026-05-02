import { DGACalcPage } from "../components";

export const metadata = {
  title: "Toetsinkomen berekenen DGA / BV met NHG",
  description: "Bereken gratis uw toetsinkomen als DGA conform NHG-toetskaders. Inclusief dubbele balanstoets, solvabiliteits- en liquiditeitsruimte, en 75% overwinst. Geen registratie nodig.",
  alternates: { canonical: "https://zakelijkinkomenberekenen.nl/toetsinkomen-dga-nhg" },
  openGraph: {
    title: "Toetsinkomen berekenen DGA / BV met NHG",
    description: "Bereken uw toetsinkomen als DGA conform NHG-toetskaders. Inclusief dubbele balanstoets en 75% overwinst.",
  },
};

export default function Page() {
  return <DGACalcPage nhg={true} />;
}
